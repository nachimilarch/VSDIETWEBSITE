import React from 'react'

const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button' }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-block text-center'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary-light'
  }
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
