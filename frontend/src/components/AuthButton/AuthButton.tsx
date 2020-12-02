import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';

type Props = {
  text: string;
  route: string;
  style?: CSSProperties;
  location: any;
};

const AuthButton = ({ text, route, style, location }: Props) => {
  return (
    <Link
      to={{
        pathname: route,
        state: { prevPath: location.pathname }
      }}
      className="auth-button"
      style={{...style}}
    >
      <p>{text}</p>
    </Link>
  )
}

export default AuthButton;
