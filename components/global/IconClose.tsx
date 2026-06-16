import React from 'react';

export default function IconClose({ className = '', stroke = '#8F27FF' }: { className?: string; stroke?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polyline points="18 15 12 9 6 15" stroke={stroke} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
