import React from 'react'
import { FaQuestion, FaUserMd, FaUtensils, FaLightbulb } from 'react-icons/fa'

const iconMap = {
  nutrition: FaUtensils,
  specialist: FaUserMd,
  requirement: FaQuestion,
  solution: FaLightbulb
}

const QuestionCard = ({ icon, children }) => {
  const IconComponent = iconMap[icon] || FaQuestion
  
  return (
    <div className="text-center bg-white/25 backdrop-blur-lg rounded-2xl shadow-lg p-6 border-2 border-white/20 hover:bg-white/35 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20">
          <IconComponent className="text-primary text-2xl" />
        </div>
      </div>
      <p className="text-secondary font-medium">{children}</p>
    </div>
  )
}

export default QuestionCard
