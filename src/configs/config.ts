// 门户接口
export const API_URL = '/api';

// 微信配置
export const WX_CONFIG = {
  APPID: 'wxa3067dff3a672225',
  LOGIN_URL: 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
};
// 微信鉴权配置(能碳预发现网，碳门户预发现网，一共4种 各环境不要直接覆盖)
export const WX_AUTH_CONFIG = {
  APPID: 'wx927e9d96cdc1c02e'
};

// 防水墙开关
export const captchaAuthConfig = {
  switch: true
};
// 防水码，预发布和现网使用不同的信息
export const VERIFY_CODE_APPID = '198048047';

// cos桶配置
export const COS_CONFIG = {
  BUCKET: 'ecs-dev-public-1302008357', // public
  BUCKET_PRIVATE: 'ecs-dev-private-1302008357', // private
  REGION: 'ap-guangzhou'
};
// 上传文件时文件路径 开发环境为 '' 预发环境为 'pre-ds' 现网环境为 'ds'
export const COS_URL_RESOURCE = '';

// cdn地址
export const CDN_URL = 'https://ecs-dev-public-1302008357.cos.ap-guangzhou.myqcloud.com';
// cdn私有桶配置
export const CDN_PRIVATE_URL = `https://${COS_CONFIG?.BUCKET_PRIVATE}.cos.ap-guangzhou.myqcloud.com`;
// Tam上报id 能碳工场_移动端h5
export const TAM_UP_ID = 'LLNOGmPSTyhXKLyhUS';
// 体验教学配置
export const TUTOR_CONFIG = { disabled: true };
// 立即咨询配置
export const CONSULT_IMMEDIATELY = { disabled: true };
// 腾讯云登录配置
export const TENCENT_CLOUD_LOGIN = { disabled: true };
// 在线客服配置
export const ONLINE_SERVICE_CONFIG = {
  // disabled: process.env.NODE_ENV === 'development', // 开发环境关闭客服
  disabled: true, // 关闭在线客服
  domId: 'qidian_wpa_3009025409_374',
  id: 'qd300902540965afaf0bd2474fe671114a932da0300e',
  src: 'https://wp.qiye.qq.com/qidian/3009025409/65afaf0bd2474fe671114a932da0300e'
};
// 特殊演示定制文案
export const CUSTOMIZED_SHOW = {
  energy_application_txt: '能源应用'
};
// 加密公钥
export const publickKey = `-----BEGIN rsa public key-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1xbo3kLi7ujcKeXotr1c
uM1IBDFfpURBjKsi8WqhY165Fz2Jt2JjQzfA9he+/5e1rnhenUkB3uhFqey+sdlL
kyEeRq+AJCmbt9SvDa4EtjdrX+KB0c/S+jq3kWyDrUtizIF8OHAEoH9585LByCCW
IF/aDDCJB9O1CyJXLJXz9h6Q4nibNHtqODN6yrt2563Qqzkg0UVXql4g6I7iZK+j
m2js2t1aaSjkNg3qYWmhkgbtdSA+Tt0I47uZxcPTt3qVAWvKSG0jXFrNbovcSNlF
f/VABwuvB4tXrDj1DCxCjq1pu4oBywOXH8svSTMNsp8vNqR7GxuX85mss5AZZQcw
yE7GSAvd6krWvIc1sUuF2atGeT/GvclbWn+UEzUOxpjrdGw1hGxerfiqSf5MndRc
MF2uDdxXdh94IjkBmnCMyzneZhAwm3KoCtfETTN+MWFRIh1WKtevgGZBic6+2THN
u8inX06UhLtfLJQUY0euy8qwx3rnXKktoyXcbMdt+wrJripsHxufy4jwciYqoBCK
WcIV9SNLglKBZP3i2xNJ2TDTAkQzI4n8Z6DWG2z8DohuQXL2bplJzeYo9Bcr5yR1
cv/sxxJRh8ebkBROke9eplKcN/YHLgNy+512VldJklIz0uBoYgO4UAacRIbUFwRG
44bJEBPvxl6j/NDXe0p4lGUCAwEAAQ==
-----END rsa public key-----`;
// 来源
export const ORIGIN_TARGET = 'tes';
// 站内信开关
export const SITE_MESSAGE_SWITCH = false;

// 静态文档地址配置如，注册协议
export const STATIC_DOCS = {
  SERVICE_AGREEMENT: 'https://ecs-test-public-1302008357.cos.ap-guangzhou.myqcloud.com/helpcenter/doc/7.html', // 服务协议
  PRIVACY_STATEMENT: 'https://ecs-test-public-1302008357.cos.ap-guangzhou.myqcloud.com/helpcenter/doc/5.html' // 隐私声明
};
