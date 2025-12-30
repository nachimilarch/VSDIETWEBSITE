import React from 'react'
import { motion } from 'framer-motion'
import { FaAppleAlt, FaHeartbeat, FaFire, FaBook } from 'react-icons/fa'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const Resources = () => {
  const navigate = useNavigate()

  const resources = [
    {
      id: 'diabetic-traffic-signal',
      icon: '🚦',
      title: 'Diabetic Traffic Signal System',
      description: 'Learn our simple color-coded system to identify foods you can eat freely (green), in moderation (orange), or should avoid (red) for diabetes management.',
      category: 'Diabetes',
      color: 'bg-green-100'
    },
    {
      id: 'heart-healthy-food-guide',
      icon: '❤️',
      title: 'Heart-Healthy Food Guide',
      description: 'Comprehensive guide to foods that support cardiovascular health, including lean proteins, whole grains, and healthy fats.',
      category: 'Heart Health',
      color: 'bg-red-100'
    },
    {
      id: 'anti-inflammatory-lifestyle',
      icon: '🔥',
      title: 'Anti-Inflammatory Lifestyle Guide',
      description: 'Complete lifestyle strategies including sleep, stress management, exercise, and daily habits to reduce inflammation and promote wellness.',
      category: 'Lifestyle',
      color: 'bg-orange-100'
    },
  ]

  const faqs = [
    {
      question: 'How are your nutrition plans personalized?',
      answer: 'We begin with a comprehensive consultation including lab reports, health history, lifestyle assessment, and food preferences. Every plan is custom-designed for your unique needs, goals, and constraints.'
    },
    {
      question: 'What is the consultation process?',
      answer: 'Start with a free initial consultation where we discuss your goals. Then undergo a detailed assessment with lab reports. Receive counseling sessions before your personalized plan is created. Throughout, you get 24/7 support.'
    },
    {
      question: 'Do you deliver meals?',
      answer: 'Yes! We provide recipes for home-based meals and also offer meal delivery services. Our plans focus on practical, easy-to-prepare dishes using ingredients you already have at home.'
    },
    {
      question: 'What happens after my plan is completed?',
      answer: 'You receive lifelong education and tools to maintain your results. We offer follow-up support and can create maintenance plans. Our goal is sustainable lifestyle transformation, not temporary changes.'
    },
    {
      question: 'Can I continue eating my favorite foods?',
      answer: 'Absolutely! We do not believe in restriction. Instead, we teach you how to portion, balance, and plan your favorite foods smartly within a healthy eating pattern.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients see initial results within 2-4 weeks, with significant transformations in 2-3 months. However, we focus on sustainable changes rather than quick fixes, so timelines vary based on individual goals.'
    }
  ]

  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[100px] flex items-center overflow-hidden py-20">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Resources & FAQs</h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-light">
              Your knowledge hub for nutrition education, guides, and answers to common questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== RESOURCES GRID ==================== */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/resources/${resource.id}`)}
                className="cursor-pointer"
              >
                <Card hover className="h-full">
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <span className="inline-block bg-primary-light/50 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-primary/20">
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{resource.title}</h3>
                  <p className="text-secondary-light mb-4">{resource.description}</p>
                  <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center gap-1">
                    Learn More →
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQs SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary-light text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services and approach
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card hover>
                  <h3 className="text-lg font-semibold text-secondary mb-3 flex items-start">
                    <span className="text-primary mr-3 font-bold">Q{index + 1}.</span>
                    {faq.question}
                  </h3>
                  <p className="text-secondary-light pl-8">{faq.answer}</p>
                </Card>
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
            <h2 className="text-3xl md:text-5xl mb-4 font-bold text-secondary">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-secondary-light max-w-2xl mx-auto">
              Get personalized answers from our nutrition experts during a free consultation
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources
