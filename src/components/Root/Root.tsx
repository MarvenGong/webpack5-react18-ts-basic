import React, { FC } from 'react';
import { Outlet } from 'react-router';
import './style.less';
interface IRootProps {
  name?: string;
}
const Root: FC<IRootProps> = () => {
  console.log('root mounted');
  return (
    <>
      <Outlet />
    </>
  );
};
export default Root;
