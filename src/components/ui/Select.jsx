import React from 'react'

const Select = ({ label, name, value, onChange, options, required = false, error }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-secondary font-medium mb-2">
          {label} {required && <span className="text-accent-red">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-accent-red text-sm mt-1">{error}</p>}
    </div>
  )
}

export default Select
