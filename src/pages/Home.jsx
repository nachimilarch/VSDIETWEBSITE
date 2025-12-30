import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight, FaUsers, FaAward, FaTrophy, FaHeartbeat, FaStar } from 'react-icons/fa'

const Home = () => {
  const navigate = useNavigate()

  // Stats data
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: FaUsers },
    { number: '95%', label: 'Satisfaction Rate', icon: FaTrophy },
    { number: '1000+', label: 'Lives Transformed', icon: FaHeartbeat },
    { number: '5+', label: 'Years Experience', icon: FaAward }
  ]

  // Features data
  const features = [
    {
      title: 'Personalized Plans',
      description: 'Custom nutrition plans tailored to your unique lifestyle, preferences, and health goals',
      icon: '📋'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock emotional and behavioral support to keep you motivated and accountable',
      icon: '📞'
    },
    {
      title: 'No Restrictions',
      description: 'Enjoy your favorite foods with smart portion control and balanced nutrition strategies',
      icon: '🍽️'
    },
    {
      title: 'Science-Based',
      description: 'Evidence-backed nutrition science combined with holistic wellness approach',
      icon: '🧪'
    },
    {
      title: 'Home-Based Meals',
      description: 'Easy recipes using everyday ingredients with optional meal delivery service',
      icon: '🏠'
    },
    {
      title: 'Long-Term Results',
      description: 'Sustainable lifestyle transformations that last, not temporary diet fixes',
      icon: '📈'
    }
  ]

  // Transformation steps
  const transformationSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free assessment to understand your goals, health status, and lifestyle'
    },
    {
      step: '02',
      title: 'Personalized Plan',
      description: 'Get a custom nutrition plan designed specifically for your needs'
    },
    {
      step: '03',
      title: 'Daily Support',
      description: 'Continuous guidance, tracking, and motivation throughout your journey'
    },
    {
      step: '04',
      title: 'Lifetime Habits',
      description: 'Build sustainable habits that keep you healthy for life'
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: 'Shweta Baldawa',
      result: 'Lost 7 kg in 40 days',
      text: 'Without losing facial charm or feeling deprived',
      rating: 5
    },
    {
      name: 'Neeraj Karan',
      result: 'Weight loss in 2 months',
      text: 'Best dieticians with custom plans for every individual',
      rating: 5
    },
    {
      name: 'Rishab Shetty',
      result: 'Significant weight loss in one month',
      text: 'Dieting can be simple and enjoyable',
      rating: 5
    }
  ]

  // Service categories for quick access
  const popularServices = [
    { name: 'Weight Management', icon: '⚖️', color: 'from-blue-500/20 to-blue-600/10' },
    { name: 'Diabetes Control', icon: '🩺', color: 'from-red-500/20 to-red-600/10' },
    { name: 'Heart Health', icon: '❤️', color: 'from-pink-500/20 to-pink-600/10' },
    { name: 'PCOS Nutrition', icon: '🌸', color: 'from-purple-500/20 to-purple-600/10' },
    { name: 'Sports Nutrition', icon: '💪', color: 'from-orange-500/20 to-orange-600/10' },
    { name: 'Hormonal Balance', icon: '⚡', color: 'from-yellow-500/20 to-yellow-600/10' }
  ]

  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-primary-light/30 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-primary/30"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <p className="text-secondary font-semibold text-sm">
                  Hand Holding for a Holistic Living
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight"
              >
                Transform Your Health<br />
                <span className="text-primary">The Right Way</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-secondary-light mb-8 leading-relaxed"
              >
                No crash diets. No shortcuts. Just personalized nutrition plans backed by science and delivered with care. Start your journey to lasting health today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Start Free Consultation <FaArrowRight />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="bg-white/30 backdrop-blur-sm text-secondary hover:bg-white/50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-primary/20"
                >
                  Explore Services
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-8"
              >
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-secondary-light text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-secondary-light text-sm">Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-secondary-light text-sm">Years Experience</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-96">
                {/* Main Feature Box */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/25 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-white/20 relative z-10"
                >
                  <div className="text-6xl mb-4">🥗</div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Balanced Nutrition</h3>
                  <p className="text-secondary-light mb-4">
                    Real food, real results. No deprivation, just smart choices.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-primary mr-3" />
                      <span className="text-secondary">Customized meal plans</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-primary mr-3" />
                      <span className="text-secondary">Expert guidance</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="text-primary mr-3" />
                      <span className="text-secondary">24/7 support</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-8 -right-8 bg-primary/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-primary/30 z-20"
                >
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="text-sm font-semibold text-secondary">Quick Results</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-white/25 backdrop-blur-lg rounded-2xl p-6 shadow-lg border-2 border-white/20 z-20"
                >
                  <div className="text-4xl mb-2">❤️</div>
                  <p className="text-sm font-semibold text-secondary">Holistic Care</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Why Choose VS Diet Concept?</h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              We offer a comprehensive approach to nutrition that goes beyond weight loss
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/25 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-primary/30 hover:bg-white/35 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-secondary-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRANSFORMATION JOURNEY ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Your Transformation Journey</h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              A simple 4-step process designed for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {transformationSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                                <div className="bg-white/25 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 h-full hover:bg-white/35 transition-all">
                  <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-secondary-light text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== POPULAR SERVICES ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Popular Services</h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Specialized nutrition programs for every health concern
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate('/services')}
                className="cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${service.color} backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/30 hover:to-primary/20 transition-all transform hover:scale-105`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-secondary">{service.name}</h3>
                  <div className="mt-4 text-primary font-semibold flex items-center">
                    Learn More <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Real Success Stories</h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Transformations from our happy clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/25 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-primary/30 hover:bg-white/35 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-secondary-light italic mb-6">"{testimonial.text}"</p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-bold text-primary mb-1">{testimonial.result}</p>
                  <p className="text-secondary font-semibold">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* ==================== CTA SECTION ==================== */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden py-20">
        {/* Animated background shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-secondary max-w-3xl mx-auto bg-white/25 backdrop-blur-lg rounded-3xl p-16 border-2 border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8 text-secondary-light">
              Join hundreds of satisfied clients who have achieved lasting health transformations with our personalized nutrition programs
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
            >
              Book Your Free Consultation <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

