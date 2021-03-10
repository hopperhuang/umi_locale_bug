const routes = [
  {
    name: 'index',
    path: '/',
    component: '@/pages/index',
    title: 'site.title',
    // access: 'canReadIndex',
    en: 'POS',
    tw: '歡迎',
    cn: '欢迎',
  },
  {
    name: 'normal_ticketing',
    path: '/seller/normal_ticketing',
    en: 'Normal Ticketing',
    tw: '正常购票',
    cn: '正常购票（繁体）',
    routes: [
      {
        path: '/seller/normal_ticketing',
        redirect: '/seller/normal_ticketing/list',
      },
      {
        name: 'normal_ticketing_list',
        en: 'Normal Ticketing List',
        tw: '正常购票列表（繁体）',
        cn: '正常购票列表',
        path: '/seller/normal_ticketing/list',
        component: '@/pages/seller/normal_ticketing/list',
        exact: true,
        hideInMenu: true,
      },
    ],
  },
];

export default routes;
