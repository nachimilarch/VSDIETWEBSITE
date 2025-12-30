import React from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Button from '../components/ui/Button'
import diabeticImage from '../assets/images/diabetic-traffic-signal.png'
import healthyheartImage from '../assets/images/healthy-heart-guidelines.png'
import lifestyleImage from '../assets/images/lifestyle-guidelines.png'

const ResourceDetail = () => {
  const { resourceId } = useParams()
  const navigate = useNavigate()

  const resourcesData = {
    'diabetic-traffic-signal': {
      title: 'Diabetic Traffic Signal System',
      description: 'Learn our simple color-coded system to identify foods you can eat freely (green), in moderation (orange), or should avoid (red) for diabetes management.',
      image: diabeticImage,
      fullDescription: 'The Diabetic Traffic Signal System is an easy-to-understand guide that helps you make smart food choices every day. Green foods are safe to eat freely, orange foods should be eaten in moderation, and red foods should be avoided or minimized.'
    },
    'heart-healthy-food-guide': {
      title: 'Heart-Healthy Food Guide',
      description: 'Comprehensive guide to foods that support cardiovascular health, including lean proteins, whole grains, and healthy fats.',
      image: healthyheartImage,
      fullDescription: 'Discover the foods that will help you maintain a healthy heart. This comprehensive guide covers everything from lean proteins to healthy fats, helping you make choices that support your cardiovascular wellness.'
    },
    'anti-inflammatory-lifestyle': {
    title: 'Anti-Inflammatory Lifestyle Guide',
    description: 'Complete lifestyle strategies including sleep, stress management, exercise, and daily habits to reduce inflammation and promote wellness.',
    image: lifestyleImage,
    fullDescription: 'Reducing inflammation goes beyond diet. This comprehensive lifestyle guide covers sleep optimization, stress management techniques, exercise routines, daily habits, and environmental factors that all contribute to reducing inflammation in your body. Learn how to integrate these practices into your life for sustainable anti-inflammatory living and better overall health.'
    },
  }

  const resource = resourcesData[resourceId]

  if (!resource) {
    return (
      <div className="section-padding container-custom text-center">
        <h1 className="text-3xl font-bold text-secondary mb-4">Resource Not Found</h1>
        <Button onClick={() => navigate('/resources')}>Back to Resources</Button>
      </div>
    )
  }

  return (
    <div>
            {/* Back Button & Title Section */}
      <section className="py-12">
        <div className="container-custom">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/resources')}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold transition-colors mb-4"
          >
            <FaArrowLeft />
            Back to Resources
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">{resource.title}</h2>
            <p className="text-xl text-secondary-light mb-8 max-w-3xl">{resource.description}</p>

            {/* Full Page Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 flex items-center justify-center min-h-[400px] md:min-h-[600px]">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-auto object-contain p-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 glass-card"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">About This Resource</h2>
            <p className="text-secondary-light text-lg leading-relaxed mb-6">
              {resource.fullDescription}
            </p>
            <Button onClick={() => navigate('/contact')}>
              Get Personalized Guidance
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ResourceDetail
