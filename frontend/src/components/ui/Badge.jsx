import React from 'react';

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest';
  
  const variants = {
    primary: 'bg-indigo-600 text-white shadow-sm',
    secondary: 'bg-indigo-100 text-indigo-700',
    success: 'bg-emerald-100 text-emerald-700 uppercase',
    danger: 'bg-rose-100 text-rose-700',
    outline: 'border border-slate-200 text-slate-500 bg-white',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
