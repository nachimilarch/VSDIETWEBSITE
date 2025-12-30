import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../cards/ServiceCard'
import { servicesData } from '../../data/servicesData'

const ServicesOverview = () => {
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
          <h2 className="text-3xl md:text-4xl text-secondary mb-4">We Are Specialized In</h2>
          <p className="text-secondary-light text-lg max-w-3xl mx-auto">
            Comprehensive nutrition solutions for every health concern and lifestyle goal
          </p>
        </motion.div>

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
  )
}

export default ServicesOverview
