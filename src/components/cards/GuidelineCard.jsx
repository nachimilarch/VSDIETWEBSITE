import React from 'react'
import { motion } from 'framer-motion'

const GuidelineCard = ({ guideline }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card h-full hover:bg-white/30 transition-all"
    >
      <div className="text-4xl mb-4">
        {guideline.icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{guideline.title}</h3>
      <p className="text-secondary-light">{guideline.description}</p>
    </motion.div>
  )
}

export default GuidelineCard
