import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes,
  fastRefresh: {},
  antd: {
    dark: false,
    compact: false,
  },
  dva: {
    immer: false,
    hmr: true,
    skipModelValidate: true,
  },
  locale: {
    /** 默认配置 */
    default: 'en-US',
    antd: true,
    title: true,
    baseNavigator: false,
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'POS',
    locale: true,
    layout: 'side',
    logo: false,
  },
});
