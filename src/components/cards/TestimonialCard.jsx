import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-full bg-white/25 backdrop-blur-lg rounded-2xl shadow-lg p-6 border-2 border-white/20 hover:bg-white/35 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center mb-4">
        <FaQuoteLeft className="text-primary/70 text-3xl mr-3" />
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>
      </div>
      <p className="text-secondary-light italic mb-4 line-clamp-4">{testimonial.text}</p>
      <div className="border-t border-primary/20 pt-4">
        <p className="font-semibold text-primary mb-1">{testimonial.result}</p>
        <p className="text-sm text-secondary-light mb-3">{testimonial.highlight}</p>
        <p className="font-semibold text-secondary">{testimonial.name}</p>
        <p className="text-sm text-secondary-light">{testimonial.location}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
