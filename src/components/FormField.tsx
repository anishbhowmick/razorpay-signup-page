import React, { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
}

export default function FormField({
  label,
  error,
  icon,
  prefix,
  className = '',
  ...props
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center">
            {prefix}
          </div>
        )}
        <input
          {...props}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm
            focus:border-primary focus:ring focus:ring-primary/20
            sm:text-sm transition-colors
            ${prefix ? 'pl-16' : ''}
            ${icon ? 'pr-10' : ''}
            ${error ? 'border-red-300' : ''}
            ${className}
          `}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}