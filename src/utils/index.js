import Cookies from 'js-cookie'
import { getConfig} from "../config";

const tokenCookieAttr = getConfig('tokenCookieAttr');

const AuthUtils = {
  isLogin() {
    return !!this.getToken();
  },
  getToken() {
    return Cookies.get(tokenCookieAttr);
  },
  setToken(token, rememberMe) {
    let attr = (rememberMe ? { expires: 30 } : undefined);//记住账号，30天有效期
    Cookies.set(tokenCookieAttr, token, attr);
  },
  removeToken() {
    Cookies.remove(tokenCookieAttr);
  },


}


