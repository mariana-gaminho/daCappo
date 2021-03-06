import React, { CSSProperties } from 'react';

import './LineInput.scss';

type Props = {
  onChange(e: any): void;
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  type?: string;
  style?: CSSProperties;
  outerStyle?: CSSProperties;
};

const LineInput = ({
  onChange,
  value,
  name,
  label,
  placeholder,
  type = "text",
  style,
  outerStyle,
}: Props) => (
  <div className="line-input" style={{...outerStyle}}>
    {label &&<p className="input-label">{label}</p>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-input"
      onChange={onChange}
      placeholder={placeholder}
      style={{...style}}
    />
  </div>
);

export default LineInput;
