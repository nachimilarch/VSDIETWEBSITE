import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  
  return (
    <section className="relative bg-gradient-to-br from-primary-light to-primary min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-caveat text-white text-2xl md:text-3xl mb-4">
              Hand Holding for a Holistic Living
            </p>
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Real Food, Real Results
            </h1>
            <p className="text-xl text-white mb-8 opacity-90">
              Personalized nutrition plans designed for your unique lifestyle. No crash diets. 
              Just sustainable transformations backed by science and delivered with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/services')}
                className="bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
