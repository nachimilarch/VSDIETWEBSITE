import React from 'react'

const Input = ({ label, type = 'text', name, value, onChange, placeholder, required = false, error }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-secondary font-medium mb-2">
          {label} {required && <span className="text-accent-red">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
      />
      {error && <p className="text-accent-red text-sm mt-1">{error}</p>}
    </div>
  )
}

export default Input
