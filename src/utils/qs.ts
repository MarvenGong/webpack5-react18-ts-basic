import qs from 'qs';

/**
 * 解析url后的值
 * @param search   非必须 需要解析的字符串
 * @returns object 对象
 */
export const qsParse = (search?: any): any => {
  if (!search || typeof search !== 'string') {
    search = window?.location?.search;
  }

  return qs?.parse(search, { ignoreQueryPrefix: true });
};

/**
 * 组装url后的值
 * @param params 必须 需要组装的对象
 * @returns string 字符串
 */
export const qsString = (params: { [index: string]: any }): string => {
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return '';
  }

  return qs?.stringify?.(params);
};
