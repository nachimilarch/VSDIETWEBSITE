import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const CTASection = () => {
  const navigate = useNavigate()
  
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl mb-4 font-bold">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation today and start your journey to holistic health with personalized nutrition guidance
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Schedule Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
