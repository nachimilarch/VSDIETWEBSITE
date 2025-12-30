import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/25 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center border-2 border-white/20 hover:bg-white/35 hover:border-blue-400/30 transition-all"
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-secondary mb-3">
        {service.title}
      </h3>
      <p className="text-secondary-light">
        {service.description}
      </p>
    </motion.div>
  )
}

export default ServiceCard
