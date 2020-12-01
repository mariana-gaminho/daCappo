import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';

type Props = {
  text: string;
  route: string;
  style?: CSSProperties;
};

const AuthButton = ({ text, route, style }: Props) => {
  return (
    <Link to={route} className="auth-button" style={{...style}}>
      <p>{text}</p>
    </Link>
  )
}

export default AuthButton;
