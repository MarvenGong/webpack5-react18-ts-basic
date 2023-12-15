import React, { FC } from 'react';
import './style.less';
interface ILazyLoadProps {
  name?: string;
}
const LazyLoad: FC<ILazyLoadProps> = () => (
    <div className="lazy-load-wraper" data-v-3t7en9kt>
      <div>Loading...</div>
    </div>
);
export default LazyLoad;
