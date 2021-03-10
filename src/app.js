import React from 'react';
import { Menu, Dropdown } from 'antd';
import { history } from 'umi';
import qs from 'qs';

export function render(oldRender) {
  oldRender();
}

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

export async function getInitialState() {
  /** 模拟获取用户信息 */
  await delay();
  return {
    name: 'my_name_is_maoyan',
    currentUser: {
      name: 'my_manager',
    },
    settings: {
      logo: false,
    },
  };
}

export const layout = (props) => {
  const { initialState } = props;
  return {
    rightContentRender: () => {
      const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank">Logout</a>
          </Menu.Item>
        </Menu>
      );
      return (
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            My Name Is MaoYan
          </a>
        </Dropdown>
      );
    },
    onPageChange: () => {
      const { currentUser } = initialState;
      // 如果没有登录，重定向到 login
      const { location } = history;
      if (!currentUser && location.pathname !== '/user/login') {
        console.log(initialState, 'initialState');
        history.push('/user/login');
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
    logout: () => {
      alert('logout');
    },
  };
};

export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
    },
  },
};

/** 自定义语言获取逻辑 */
export const locale = {
  getLocale() {
    const { search } = window.location;
    const { locale: language = 'en-US' } = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    return language;
  },
  setLocale({ lang, realReload, updater }) {
    history.push(`/?locale=${lang}`);
    if (realReload) {
      window.location.reload();
    }
    updater();
  },
};
