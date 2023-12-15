import AuthManager from '@src/libs/AuthManager';
import React, { useState, useEffect, FC } from 'react';
import './style.less';
interface IHomeProps {
  name?: string;
}
const Home: FC<IHomeProps> = (props: IHomeProps) => {
  const { name } = props;
  const [userInfo, setUserInfo] = useState<any>({});
  useEffect(() => {
    const userInfo = AuthManager.getUser();
    setUserInfo({ ...userInfo })
  }, []);
  return (
    <div className="home-wraper" data-v-apu556ke>
      <h3>首页</h3>
      <p>当前登录用户 {userInfo?.user_name}</p>
    </div>
  );
};
export default Home;
