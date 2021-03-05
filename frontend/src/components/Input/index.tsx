import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  size: number;
  text: string;
}

const Input: React.FC<InputProps> = ({ name, size, text, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <p>{text}</p>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        style={{ width: `${size}px` }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
