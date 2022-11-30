/* eslint-disable @typescript-eslint/naming-convention */
class CookieManager {
  /**
   * @description 读取cookie
   * @public
   * @param {String} n 名称
   * @returns {String} cookie值
   * @example
   *      cookie.get('id_test');
   */
  public static get(n: string) {
    const m = document.cookie.match(new RegExp(`(^| )${n}=([^;]*)(;|$)`));
    return !m ? '' : decodeURIComponent(m[2]);
  }

  /**
   * @description 设置cookie
   * @public
   *
   * @param {String} name cookie名称
   * @param {String} value cookie值
   * @param {String} [domain = ""] 所在域名
   * @param {String} [path = "/"] 所在路径
   * @param {Number} [hour = 30] 存活时间，单位:小时
   * @example
   *      cookie.set('value1','cookieval',"id.qq.com","/test",24); //设置cookie
   */
  public static set(
    name: string,
    value: string,
    domain?: string,
    path?: string,
    hour?: number
  ) {
    const expire = new Date();
    expire.setTime(expire.getTime() + (hour ? 3600000 * hour : 30 * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}${
      hour ? `; expires=${expire.toUTCString()}` : ''
    }; path=${path || '/'}; ${domain ? `domain=${domain};` : ''}`;
    if (name === 'tes-menus') {
      let MenuEvent = null;
      if (typeof Event === 'function') {
        // event = new Event('submit');
        MenuEvent = new Event('menus_update');
      } else {
        MenuEvent = document.createEvent('Event');
        MenuEvent.initEvent('menus_update', true, true);
      }
      // const MenuEvent = new Event('menus_update');
      window.dispatchEvent(MenuEvent);
    }
  }

  public static setSession(
    name: string,
    value: string,
    domain: string,
    path: string
  ) {
    document.cookie = `${name}=${value}; path=${path || '/'}; ${
      domain ? `domain=${domain};` : ''
    }`;
  }

  /**
   * @description 删除指定cookie,复写为过期 !!注意path要严格匹配， /id 不同于/id/
   * @public
   *
   * @param {String} name cookie名称
   * @param {String} [domain] 所在域
   * @param {String} [path = "/"] 所在路径
   * @example
   *      cookie.del('id_test'); //删除cookie
   */
  public static del(name: string, domain: string, path: string) {
    document.cookie = `${name}=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=${path
      || '/'}; ${domain ? `domain=${domain};` : ''}`;
  }

  /**
   * @description clear all cookie
   */
  public static clear() {
    const rs = document.cookie.match(new RegExp('([^ ;][^;]*)(?=(=[^;]*)(;|$))', 'gi'));
    // 删除所有cookie
    if (rs) {
      rs.forEach((x) => {
        document.cookie = `${x}=;expires=Mon, 26 Jul 1997 05:00:00 GMT; path=/; `;
      });
    }
  }
}

export default CookieManager;
