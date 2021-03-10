import generage_locale_object from '../utils/generate_locale_object_by_routes';
import routes from '../../config/routes';

const { tw_locale, cn_locale, en_locale } = generage_locale_object(routes);

export const MENU_TW = tw_locale;
export const MENU_CN = cn_locale;
export const MENU_EN = en_locale;
