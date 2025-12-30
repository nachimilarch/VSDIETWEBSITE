import React from 'react'
import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import viniImage from '../assets/images/vini.jpg'
import sandhyaImage from '../assets/images/sandhya.jpg'

const About = () => {
  const navigate = useNavigate()


const team = [
    {
      name: 'Vinutha Bolla',
      credential: 'Certified Nutritionist',
      certification: 'Certificate of Completion - Udaan',
      description: 'Expert in personalized nutrition planning with a holistic approach to health and wellness.',
      image: viniImage,
    },
    {
      name: 'Sandhya Awasthi',
      credential: 'Certified Nutritionist',
      certification: 'Certificate of Completion - Udaan',
      description: 'Specializes in metabolic health, hormonal balance, and lifestyle nutrition transformations.',
      image: sandhyaImage,
    }
  ]


  const philosophy = [
    {
      emoji: '❤️',
      title: 'Holistic & Science-Based',
      description: 'We combine evidence-based nutrition science with a holistic understanding of your lifestyle, preferences, and health goals.'
    },
    {
      emoji: '📚',
      title: 'Education-Driven Approach',
      description: 'We empower you with knowledge about nutrition, helping you make informed choices for lifelong health.'
    },
    {
      emoji: '👥',
      title: 'Personalized Care',
      description: 'Every plan is tailored to your unique needs, with 24/7 support and one-on-one counseling throughout your journey.'
    },
    {
      emoji: '🎯',
      title: 'Long-Term Transformation',
      description: 'No crash diets or shortcuts. We focus on sustainable lifestyle changes that lead to lasting health improvements.'
    }
  ]

  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[300px] flex items-center overflow-hidden py-20">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">About VS Diet Concept</h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-light">
              Transforming lives through personalized, science-based nutrition that fits seamlessly into your lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl text-secondary mb-6 font-bold">Our Story</h2>
              <p className="text-secondary-light mb-4 leading-relaxed">
                At VS Diet Concept, we believe nutrition is not about restriction—it is about transformation. 
                Founded by certified nutritionists Vinutha Bolla and Sandhya Awasthi, our mission is to empower 
                individuals through personalized, science-based nutrition plans that fit seamlessly into their lifestyles.
              </p>
              <p className="text-secondary-light mb-4 leading-relaxed">
                We understand that every person is unique, with different health goals, preferences, and challenges. 
                That is why we do not believe in one-size-fits-all diets. Instead, we provide hand-holding support 
                throughout your journey, combining nutritional expertise with emotional and behavioral guidance.
              </p>
              <p className="text-secondary-light mb-6 leading-relaxed">
                Our approach is holistic, science-based, and focused on long-term lifestyle transformations. 
                We have helped hundreds of clients achieve their health goals through sustainable changes, not crash diets or shortcuts.
              </p>
              <Button onClick={() => navigate('/contact')}>Start Your Journey</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card hover:bg-white/35 transition-all">
                <h3 className="text-2xl font-semibold text-secondary mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    '24/7 continuous support and accountability',
                    'Personalized plans based on your preferences',
                    'No restrictive diets or food elimination',
                    'Focus on root causes, not just symptoms',
                    'Home-based meals with recipe delivery',
                    'Education-driven approach for lasting results',
                    'Certified nutritionists with proven track record'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 text-xl mr-3 flex-shrink-0">✓</span>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== MEET OUR TEAM ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4 font-bold">Meet Our Expert Nutritionists</h2>
            <p className="text-secondary-light text-lg max-w-2xl mx-auto">
              Certified professionals dedicated to your health transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="glass-card hover:bg-white/35 transition-all overflow-hidden">
                  {/* Image/Avatar Section */}
                  <div className="flex flex-col items-center justify-center mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full border-4 border-white/30 shadow-lg"
                    />
                  </div>


                  {/* Content Section */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-secondary mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.credential}</p>
                    
                    {/* Certification Badge */}
                    <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg mb-4 border border-white/20 hover:bg-white/40 transition-all inline-block">
                      <p className="text-sm text-secondary flex items-center justify-center gap-2">
                        <FaAward className="text-blue-500" />
                        {member.certification}
                      </p>
                    </div>

                    <p className="text-secondary-light leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUR PHILOSOPHY ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4 font-bold">Our Philosophy</h2>
            <p className="text-secondary-light text-lg max-w-2xl mx-auto">
              The core principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card hover:bg-white/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-5xl mb-4 text-center">{item.emoji}</div>
                  <h3 className="text-lg font-semibold text-secondary mb-3 text-center">{item.title}</h3>
                  <p className="text-secondary-light text-sm text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VALUES SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4 font-bold">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                emoji: '🤝',
                title: 'Trust & Transparency',
                desc: 'We believe in honest communication and transparent practices in all interactions.'
              },
              {
                emoji: '🏆',
                title: 'Excellence',
                desc: 'We strive for excellence in everything we do, from nutrition plans to client support.'
              },
              {
                emoji: '🌱',
                title: 'Sustainability',
                desc: 'We focus on sustainable changes that you can maintain for the rest of your life.'
              },
              {
                emoji: '💡',
                title: 'Innovation',
                desc: 'We stay updated with the latest nutrition science and incorporate evidence-based practices.'
              },
              {
                emoji: '♿',
                title: 'Inclusivity',
                desc: 'We welcome clients from all backgrounds and create plans for diverse dietary needs.'
              },
              {
                emoji: '🎯',
                title: 'Results-Oriented',
                desc: 'We are focused on achieving your goals through proven, effective strategies.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-card text-center hover:bg-white/35 transition-all"
              >
                <div className="text-4xl mb-3">{value.emoji}</div>
                <h3 className="text-lg font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-secondary-light text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden py-20">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-secondary max-w-3xl mx-auto glass-card"
          >
            <h3 className="text-3xl md:text-5xl mb-6 font-bold">Ready to Start Your Transformation?</h3>
            <p className="text-lg md:text-xl mb-8 text-secondary-light max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their lives with our personalized nutrition plans and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
              >
                Book Your Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

