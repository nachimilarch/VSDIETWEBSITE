import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import TestimonialCard from '../cards/TestimonialCard'
import { testimonialsData } from '../../data/testimonialsData'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-secondary mb-4">Real Stories, Real Transformations</h2>
          <p className="text-secondary-light text-lg max-w-2xl mx-auto">
            Hear from our clients who achieved lasting health transformations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonialsData[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-primary/30 backdrop-blur-md hover:bg-primary/50 text-primary rounded-full flex items-center justify-center transition-all border border-primary/20"
            >
              <FaChevronLeft />
            </button>
            
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-400/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-primary/30 backdrop-blur-md hover:bg-primary/50 text-primary rounded-full flex items-center justify-center transition-all border border-primary/20"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
