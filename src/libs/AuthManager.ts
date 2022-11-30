import { AppConst } from '@src/configs/constant';
import CookieManager from './CookieManager';
const COOKIE_KEY = AppConst.USER_COOKIE_KEY;

class AuthManager {
  public static permissionErrorHandler = null;

  public static saveUser(user) {
    if (user === null) {
      CookieManager.set(COOKIE_KEY, '');
    } else {
      CookieManager.set(
        COOKIE_KEY,
        JSON.stringify({
          user_id: user?.user_id,
          user_name: user?.user_name,
          firm_id: user?.firm_id || '',
          phone: user?.phone || '',
          is_tutor: user?.is_tutor || '',
          firm_admin: user?.firm_admin || '',
        }),
      );
    }
  }

  public static getUser() {
    let user = null;
    try {
      user = CookieManager.get(COOKIE_KEY) ? JSON.parse(CookieManager.get(COOKIE_KEY)) : '';
    } catch (e) {
      console.log(e);
    }
    return user;
  }

  public static isLogin() {
    return AuthManager.getUser();
  }

  public static validate() {
    if (AuthManager.permissionErrorHandler) {
      AuthManager.permissionErrorHandler();
    }
    return false;
  }
}
export default AuthManager;
