import React from 'react'

const Card = ({ children, className = '', hover = false, color = 'white' }) => {
  const colorVariants = {
    white: 'bg-white/30 border-white/20',
    green: 'bg-green-100/20 border-primary/15',
    lightGreen: 'bg-green-50/25 border-green-200/20',
    cream: 'bg-amber-50/20 border-amber-100/15',
    blue: 'bg-blue-50/20 border-blue-100/15',
  }

  return (
    <div 
      className={`
        ${colorVariants[color]} 
        backdrop-blur-lg
        rounded-2xl 
        shadow-lg 
        p-6 
        border-2
        ${hover ? 'hover:bg-white/40 hover:shadow-2xl hover:-translate-y-2 hover:backdrop-blur-xl transition-all duration-300 cursor-pointer' : 'transition-all duration-300'} 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
