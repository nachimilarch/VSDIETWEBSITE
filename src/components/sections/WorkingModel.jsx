import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaClipboardList, FaUsers, FaUserCheck, FaHeart, FaUtensils,
  FaPhone, FaTarget, FaFlask, FaBook, FaShieldAlt,
  FaHome, FaTruck, FaTrendingUp, FaBolt
} from 'react-icons/fa'
import { workingModelData, coreValues } from '../../data/workingModelData'

const iconMap = {
  'clipboard': FaClipboardList,
  'users': FaUsers,
  'user-check': FaUserCheck,
  'heart': FaHeart,
  'utensils': FaUtensils,
  'phone': FaPhone,
  'target': FaTarget,
  'flask': FaFlask,
  'book': FaBook,
  'shield': FaShieldAlt,
  'home': FaHome,
  'truck': FaTruck,
  'trending-up': FaTrendingUp,
  'zap': FaBolt
}

const WorkingModel = () => {
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
          <h2 className="text-3xl md:text-4xl text-secondary mb-4">How We Work</h2>
          <p className="text-secondary-light text-lg max-w-3xl mx-auto">
            A proven 14-step process for long-term lifestyle transformation with continuous support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {workingModelData.map((step, index) => {
              const IconComponent = iconMap[step.icon] || FaHeart
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start mb-4 bg-white/25 backdrop-blur-lg p-4 rounded-xl shadow-sm hover:bg-white/35 hover:shadow-md transition-all border border-white/20"
                >
                  <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-primary/20">
                    <IconComponent className="text-primary text-lg" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary mr-2">{step.id}.</span>
                    <span className="text-secondary">{step.text}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-lg p-6 rounded-2xl text-center text-secondary shadow-lg border border-primary/20 hover:border-primary/40 transition-all"
              >
                <h3 className="font-semibold text-base">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingModel
