import AuthManager from '@src/libs/AuthManager';
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router';
interface IProps {
  children: React.ReactNode;
}
const RequireAuth: FC<any> = ({ children }: IProps) => {
  const location = useLocation();
  console.log('🚀 ~ file: RequireAuth.tsx ~ 当前页面信息', location);
  const isLogin = AuthManager?.isLogin();
  if (!isLogin) {
    let redirectUrl = window.location.pathname;
    redirectUrl = window?.location?.href?.includes?.('?')
      ? `${redirectUrl}?${window.location.href?.split?.('?')[1]}`
      : redirectUrl;
    return <Navigate replace to={`/iam/login?redirectUrl=${redirectUrl}`} />; // 跳转到登录
  }
  return <>{children}</>;
};
export default RequireAuth;
