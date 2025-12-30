import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'
import { servicesData, healthyHeartGuidelines, antiInflammatoryGuidelines } from '../data/servicesData'
import Button from '../components/ui/Button'
import GuidelineCard from '../components/cards/GuidelineCard'
import Card from '../components/ui/Card'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = servicesData.find(s => s.id === serviceId)

  if (!service) {
    return (
      <div className="section-padding container-custom text-center">
        <h1 className="text-3xl font-bold text-secondary mb-4">Service Not Found</h1>
        <Button onClick={() => navigate('/services')}>Back to Services</Button>
      </div>
    )
  }z

  const isHeartService = serviceId === 'cardiovascular'
  const isAntiInflammatory = serviceId === 'weight-management'

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-primary py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button 
              onClick={() => navigate('/services')}
              className="text-white flex items-center mb-6 hover:opacity-80 transition-opacity"
            >
              <FaArrowLeft className="mr-2" />
              Back to All Services
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h2>
            <p className="text-xl text-white opacity-90 max-w-3xl">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-8 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <FaCheckCircle className="text-primary text-xl mr-3 mt-1 flex-shrink-0" />
                  <span className="text-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthy Heart Guidelines */}
      {isHeartService && (
        <>
          <section className="section-padding bg-bg-light">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl text-secondary mb-4">Nutritional Guidelines</h2>
                <p className="text-secondary-light text-lg max-w-2xl mx-auto">
                  Essential nutrition strategies for a healthy heart
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthyHeartGuidelines.nutritional.map((guideline, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GuidelineCard guideline={guideline} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl text-secondary mb-4">Lifestyle Guidelines</h2>
                <p className="text-secondary-light text-lg max-w-2xl mx-auto">
                  Daily habits that support cardiovascular wellness
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthyHeartGuidelines.lifestyle.map((guideline, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GuidelineCard guideline={guideline} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Anti-Inflammatory Guidelines */}
      {isAntiInflammatory && (
        <section className="section-padding bg-bg-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl text-secondary mb-6">Benefits of Anti-Inflammatory Nutrition</h2>
                <div className="space-y-3">
                  {antiInflammatoryGuidelines.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-primary text-xl mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-primary-light">
                  <h3 className="text-2xl font-semibold text-secondary mb-6">Lifestyle Tips</h3>
                  <div className="space-y-4">
                    {antiInflammatoryGuidelines.lifestyle.map((tip, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-primary text-2xl mr-3">•</span>
                        <span className="text-secondary">{tip}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4">How It Works</h2>
            <p className="text-secondary-light text-lg max-w-2xl mx-auto">
              Your journey to better health in simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Book Consultation', description: 'Schedule your free initial consultation with our experts' },
              { step: '2', title: 'Get Assessment', description: 'Complete health assessment with lab reports and counseling' },
              { step: '3', title: 'Receive Your Plan', description: 'Get your personalized nutrition plan tailored to your needs' },
              { step: '4', title: 'Track Progress', description: '24/7 support and regular follow-ups to ensure success' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                  <p className="text-secondary-light">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">Get Your Personalized {service.title} Plan</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start your transformation today with expert guidance and continuous support
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Book Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
