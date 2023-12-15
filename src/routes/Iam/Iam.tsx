import React, { useState, useEffect, FC } from 'react';
import { Outlet } from 'react-router';
import './style.less';
interface IIamProps {
  name?: string;
}
const Iam: FC<IIamProps> = (props: IIamProps) => {
  const { name } = props;
  return (
    <div className="iam-wraper" data-v-lev9k4nk>
      <Outlet></Outlet>
    </div>
  );
};
export default Iam;
