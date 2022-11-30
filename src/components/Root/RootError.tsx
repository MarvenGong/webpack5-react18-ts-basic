import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import Img404 from './404.jpg';
import './style.less';
export default function ErrorPage() {
  const error: any = useRouteError();
  const { status } = error;
  const navigate = useNavigate();
  if (status === 404) {
    return <div className="notfound-page">
      <p>
        <img alt="" className="picture-404" src={Img404} srcSet="" />
      </p>
      <div className="actions">
        <button className="btn-back" onClick={() => navigate('/')}>返回首页</button>
      </div>
    </div>;
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <p style={{ color: '#f33' }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
