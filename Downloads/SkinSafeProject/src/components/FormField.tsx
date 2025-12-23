import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  textarea?: boolean;
  select?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

export function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  error,
  value,
  onChange,
  textarea = false,
  select = false,
  options = [],
  rows = 4
}: FormFieldProps) {
  const inputBaseStyles = 'w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';
  const inputNormalStyles = 'border-gray-300 focus:border-primary-500 focus:ring-primary-500';
  const inputErrorStyles = 'border-danger-500 focus:border-danger-500 focus:ring-danger-500';

  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-gray-700">
        {label}
        {required && <span className="text-danger-500 ml-1">*</span>}
      </label>
      
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`${inputBaseStyles} ${error ? inputErrorStyles : inputNormalStyles} resize-none`}
        />
      ) : select ? (
        <select
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          className={`${inputBaseStyles} ${error ? inputErrorStyles : inputNormalStyles}`}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`${inputBaseStyles} ${error ? inputErrorStyles : inputNormalStyles}`}
        />
      )}
      
      {error && (
        <div className="flex items-center gap-2 mt-2 text-danger-600 animate-shake">
          <AlertCircle size={16} />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
}
