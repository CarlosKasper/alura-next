import React from 'react';

export default function LinkEstilizado ({ onClick, href, children }, ref) {
  return (
    <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
    </a>
  );
};