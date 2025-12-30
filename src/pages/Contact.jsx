import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { servicesData } from '../data/servicesData'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzdDzsqnEGaRzsGHx2oHtbMh0RZ0xjpaTtRG5fOY3GnU-435206At8yPo-vSiuWPNlc/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.status === 'success') {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.message)
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Error submitting form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const serviceOptions = servicesData.map(service => ({
    value: service.id,
    label: service.title
  }))

  const contactInfo = [
    {
      emoji: '📞',
      title: 'Phone',
      details: ['+91 81849 69909', '+91 98494 93543']
    },
    {
      emoji: '📧',
      title: 'Email',
      details: ['nutrition@vsdiet.in']
    }
  ]

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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-light">
              Ready to start your journey? We're here to help you every step of the way
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <h2 className="text-2xl font-semibold text-secondary mb-6">Send Us a Message</h2>
                
                {submitted && (
                  <div className="bg-blue-500/20 backdrop-blur-sm border-l-4 border-blue-500 p-4 mb-6 rounded">
                    <p className="text-blue-600 font-semibold">Thank you for your inquiry!</p>
                    <p className="text-secondary text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />

                  <Select
                    label="Service Interest"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    options={serviceOptions}
                    required
                  />

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-secondary font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your health goals and any specific concerns..."
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Information</h2>
                  <p className="text-secondary-light mb-6">
                    Reach out to us through any of the following channels. We're available 24/7 to support your health journey.
                  </p>
                </div>

                  {contactInfo.map((info, index) => (
                  <Card key={index} hover>
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 flex-shrink-0">{info.emoji}</div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => {
                          if (info.title === 'Phone') {
                            return (
                              <a
                                key={idx}
                                href={`tel:${detail.replace(/\D/g, '')}`}
                                className="text-blue-500 hover:text-blue-600 hover:underline transition-colors block"
                              >
                                {detail}
                              </a>
                            )
                          } else if (info.title === 'Email') {
                            return (
                              <a
                                key={idx}
                                href={`mailto:${detail}`}
                                className="text-blue-500 hover:text-blue-600 hover:underline transition-colors block"
                              >
                                {detail}
                              </a>
                            )
                          } else {
                            return (
                              <p key={idx} className="text-secondary-light">{detail}</p>
                            )
                          }
                        })}
                      </div>
                    </div>
                  </Card>
                ))}

                <Card>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="font-semibold text-secondary mb-3">Why Contact Us?</h3>
                    <ul className="space-y-2 text-secondary-light text-sm">
                      <li>• Personalized plan assessment</li>
                      <li>• Expert guidance on service selection</li>
                      <li>• Quick response within 24 hours</li>
                      <li>• No obligation to enroll</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

            {/* ==================== SOCIAL MEDIA SECTION ==================== */}
      <section className="section-padding bg-white/10 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4">Follow Us</h2>
            <p className="text-secondary-light text-lg mb-8 max-w-2xl mx-auto">
              Connect with us on social media for tips, updates, and wellness inspiration
            </p>
            
            <div className="flex justify-center gap-8">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/25 backdrop-blur-lg rounded-full flex items-center justify-center text-3xl text-blue-600 hover:bg-blue-600/30 transition-all border-2 border-white/20 hover:border-blue-400/50"
                title="Facebook"
              >
                <FaFacebook />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/25 backdrop-blur-lg rounded-full flex items-center justify-center text-3xl text-pink-500 hover:bg-pink-500/30 transition-all border-2 border-white/20 hover:border-pink-400/50"
                title="Instagram"
              >
                <FaInstagram />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/25 backdrop-blur-lg rounded-full flex items-center justify-center text-3xl text-blue-700 hover:bg-blue-700/30 transition-all border-2 border-white/20 hover:border-blue-400/50"
                title="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PARTNERS SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl text-secondary mb-4">Our Trusted Partners</h2>
            <p className="text-secondary-light text-lg mb-8 max-w-2xl mx-auto">
              We collaborate with leading healthcare institutions to provide comprehensive wellness solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  emoji: '💊',
                  name: 'Milarch Pharma',
                  description: 'Growing Health, Hope and Harmony through collaborative care'
                },
                {
                  emoji: '🏥',
                  name: 'Kirloskar Hospital',
                  description: 'Your Pathway to Holistic Healing with integrated nutrition support'
                },
                {
                  emoji: '⚕️',
                  name: 'Isha Medicare Multi Speciality Hospitals',
                  description: 'Empowering Healthier lives through Nutrition and Medical Excellence'
                }
              ].map((partner, index) => (
                <Card key={index} hover className="text-center">
                  <div className="text-4xl mb-4">{partner.emoji}</div>
                  <h3 className="font-semibold text-secondary mb-2">{partner.name}</h3>
                  <p className="text-secondary-light text-sm">{partner.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
