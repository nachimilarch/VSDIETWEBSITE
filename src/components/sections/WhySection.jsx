import React from 'react'
import { motion } from 'framer-motion'
import QuestionCard from '../cards/QuestionCard'

const questions = [
  { icon: 'nutrition', text: 'What is Nutrition?' },
  { icon: 'specialist', text: 'What is the need for a Nutrition Specialist?' },
  { icon: 'requirement', text: 'Does your diet fulfil your Nutritional Requirements?' },
  { icon: 'solution', text: 'Why is VS Diet Concept here?' }
]

const WhySection = () => {
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
          <h2 className="text-3xl md:text-4xl text-secondary mb-4">Why VS Diet Concept?</h2>
          <p className="text-secondary-light text-lg max-w-2xl mx-auto">
            We believe in empowering you with knowledge and personalized care
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <QuestionCard icon={question.icon}>
                {question.text}
              </QuestionCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySection
