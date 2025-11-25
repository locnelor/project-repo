import request from "../request";

const loginHeaders: Record<string, string> = {
  Accept: "application/json; charset=UTF-8",
  "Content-Type": "application/json; charset=UTF-8",
};

// 切换组织（登录会话）
export const userSwitchOrg = (id: string | number) => {
  return request.post(`/acc/switch/org/${id}`);
};

// 获取短信验证码（登录）
export const getValidatorCode = () => {
  return request.get(`/api/auth/sms/verificationCode`);
};

// 账号密码登录
export const userLogin = (opts: any) => {
  return request.post(`/acc/login`, opts, { headers: loginHeaders });
};

// 短信验证码登录
export const userSmsLogin = (opts: any) => {
  return request.post(`/api/auth/sms/login`, opts, { headers: loginHeaders });
};

// 修改密码
export const editPasswordData = (opts: object) => {
  return request.put(`/api/sys/user/update-password`, opts);
};

// 微信扫码登录
export const userScanTheCodeLogin = (opts: any) => {
  return request.post(
    `/api/authentication/wx-mini-app/open/scanTheCode/login`,
    opts,
    { headers: loginHeaders },
  );
};

// 钉钉扫码登录
export const userScanTheDDCodeLogin = (opts: any) => {
  return request.post(`/api/auth/ding-talk/scan_code_login`, opts, {
    headers: loginHeaders,
  });
};

// 微信扫码登录（确认用户）
export const userScanTheCodeConfirmUserLogin = (opts: any) => {
  return request.post(
    `/api/authentication/wx-mini-app/open/scanTheCode/confirmUser/login`,
    opts,
    { headers: loginHeaders },
  );
};

// 第三方登录（Base64）
export const thirdParty = (opts: any) => {
  return request.get(`/api/auth/access/authentication/base64`, {
    params: opts,
  });
};

// 飞书免登录
export const feiShuLogin = (opts: any) => {
  return request.post(`/api/auth/FeiShu/feishu_login`, opts);
};

// 发送登录短信验证码
export const sendLoginCode = (opts: any) => {
  return request.post(`/api/auth/sms/send-login-code`, opts, {
    headers: loginHeaders,
  });
};

// 二次验证（菜单功能授权）
export const sendVerificationCode = (opts: any) => {
  return request.post(`/api/function/auth/sms/menu/function/auth`, opts);
};

// 发送授权验证码
export const sendAuthCode = (phoneNumber: string) => {
  return request.post(`/api/function/auth/sms/send-auth-code`, {
    phoneNumber,
  });
};
