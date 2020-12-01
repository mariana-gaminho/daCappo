import React from 'react';

import './LineInput.scss';

type Props = {
  onChange(e: any): void;
  label: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  type?: string;
};

const LineInput = ({
  onChange,
  value,
  name,
  label,
  placeholder,
  type = "text",
}: Props) => (
  <div className="line-input">
    <p className="input-label">{label}</p>
    <input
      type={type}
      value={value}
      name={name}
      className="form-input"
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default LineInput;
