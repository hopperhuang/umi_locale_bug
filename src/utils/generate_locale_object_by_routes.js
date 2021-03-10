const generage_locale_object = (routes) => {
  const tw_locale = {};
  const cn_locale = {};
  const en_locale = {};
  const walkRoute = (_routes_ = [], ancestor_key) => {
    _routes_.forEach((route) => {
      const { name, tw, cn, en, routes: childrenRoutes } = route;
      /** name 存在 路由 才需要遍历 */
      if (name) {
        const key = `${ancestor_key}.${name}`;
        tw_locale[key] = tw;
        cn_locale[key] = cn;
        en_locale[key] = en;
        if (childrenRoutes && Array.isArray(childrenRoutes)) {
          return walkRoute(childrenRoutes, key);
        }
        return null;
      }
      return null;
    });
  };
  walkRoute(routes, 'menu');
  return {
    tw_locale,
    cn_locale,
    en_locale,
  };
};

export default generage_locale_object;
