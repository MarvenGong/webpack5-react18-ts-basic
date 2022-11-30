import AuthManager from '@src/libs/AuthManager';
import React, { useState, useEffect, FC } from 'react';
import { useNavigate } from 'react-router';
import './style.less';
interface ILoginProps {
  name?: string;
}
const Login: FC<ILoginProps> = (props: ILoginProps) => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>();
  const handleLogin = () => {
    const userInfo = {
      user_id: '10001',
      user_name: '张三',
      phone: '15833333333'
    };
    AuthManager.saveUser({
      ...userInfo
    });
    navigate('/');
  }
  return (
    <div className="login-wraper" data-v-wp34h0lb>
      <h2>登录</h2>
      <button onClick={() => handleLogin()}>登录</button>
    </div>
  );
};
export default Login;
