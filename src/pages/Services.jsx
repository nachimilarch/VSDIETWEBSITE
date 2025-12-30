import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/cards/ServiceCard'
import { servicesData } from '../data/servicesData'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[200px] flex items-center overflow-hidden py-20">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-secondary"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Specialized Services</h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-light">
              Comprehensive nutrition solutions tailored to your unique health needs and lifestyle goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY OUR SERVICES WORK ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4">Why Our Services Work</h2>
            <p className="text-secondary-light text-lg max-w-3xl mx-auto">
              Our proven approach delivers sustainable results through personalized care and continuous support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Assessment',
                description: 'Every plan begins with a thorough consultation, lab report analysis, and understanding of your unique health status, goals, and preferences.'
              },
              {
                title: 'Continuous Support',
                description: '24/7 emotional and behavioral support with daily follow-ups to ensure you stay on track and overcome any challenges.'
              },
              {
                title: 'Sustainable Results',
                description: 'Focus on long-term lifestyle changes, not quick fixes. Our education-driven approach helps you maintain results for life.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/25 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center border-2 border-white/20 hover:bg-white/35 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm text-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold border border-primary/20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                <p className="text-secondary-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative min-h-[200px] flex items-center overflow-hidden py-20">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-secondary max-w-3xl mx-auto bg-white/25 backdrop-blur-lg rounded-3xl p-16 border-2 border-white/20"
          >
            <h2 className="text-3xl md:text-5xl mb-4 font-bold text-secondary">Not Sure Which Service is Right for You?</h2>
            <p className="text-xl mb-8 text-secondary-light max-w-2xl mx-auto">
              Book your consultation and let the experts help you choose the perfect nutrition plan
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Get Expert Guidance
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
