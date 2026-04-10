import React from 'react';

const Input = ({ 
  label, 
  error, 
  icon: Icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Icon size={18} />
          </span>
        )}
        <input 
          className={`
            w-full ${Icon ? 'pl-11' : 'px-4'} pr-4 py-3 
            bg-white border border-slate-200 
            rounded-xl focus:ring-4 focus:ring-indigo-100 
            focus:border-indigo-600 transition-all outline-none 
            placeholder:text-slate-400 text-slate-700
            ${error ? 'border-red-500 focus:ring-red-100' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 ml-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
