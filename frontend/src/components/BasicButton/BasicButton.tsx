import React, { CSSProperties } from 'react';

import './BasicButton.scss';

type Props = {
  text: string;
  onClick(e?: any): void;
  disabled?: boolean;
  style?: CSSProperties;
};

const BasicButton = ({ text, onClick, disabled, style }: Props) => {
  return (
    <button
    className={`basic-button ${disabled ? 'disabled' : null}`}
    onClick={onClick}
    style={{
      opacity: disabled ? 0.3 : 1,
      outline: 'none',
      ...style
    }}
    disabled={disabled}
  >
    {text}
  </button>
  );
};

export default BasicButton;
