
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  User,
  MessageSquare,
  Building,
  Calendar,
  MessageCircle
} from 'lucide-react';

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    college: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    moveInDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        college: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        moveInDate: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@hellostudent.in",
      description: "Send us an email anytime",
      action: () => window.location.href = 'mailto:support@hellostudent.in?subject=Inquiry about Student Accommodation',
      color: "hello-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 70211 74615",
      description: "Available 24/7 for assistance",
      action: () => window.location.href = 'tel:+917021174615',
      color: "hello-blue"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 98200 72322",
      description: "Chat with us instantly",
      action: () => window.open('https://wa.me/919820072322?text=Hi%20Hello%20Student%20team,%20I%20am%20interested%20in%20learning%20more%20about%20your%20student%20accommodation%20services.', '_blank'),
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Mumbai, Maharashtra",
      description: "Multiple locations across Mumbai",
      action: () => {},
      color: "hello-yellow"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "24/7 Support",
      description: "We're always here to help",
      action: () => {},
      color: "hello-blue"
    }
  ];

  const faqs = [
    {
      question: "What is included in the rent?",
      answer: "Rent includes furnished room, Wi-Fi, housekeeping, utilities, and access to all common facilities."
    },
    {
      question: "Is there a security deposit?",
      answer: "Yes, we require a refundable security deposit depending on the location."
    },
    {
      question: "Can I visit the property before booking?",
      answer: "Absolutely! We encourage visits. Contact us to schedule a tour of our facilities."
    },
    {
      question: "What are the meal options?",
      answer: "You have the option to cook your own meals in our fully equipped kitchens, or, if you prefer, you can choose from our partnered meal services that offer delicious, home-cooked food as an add-on."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ready to find your perfect student accommodation? We're here to help you 
                every step of the way. Contact us today and let's find your home away from home.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-hello-blue-100 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="text-hello-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Quick Response</h3>
                  <p className="text-gray-600">We are open 24/7. </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://img.freepik.com/premium-photo/friendly-customer-service-representative-wearing-headset-smiles-while-talking-customer-laptop_878635-24235.jpg"
                  alt="Customer service representative helping student"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Contact <span className="text-gradient">Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={info.action}
                  className={`bg-${info.color}-50 p-8 rounded-2xl text-center hover-lift cursor-pointer group`}
                >
                  <div className={`w-16 h-16 bg-${info.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-${info.color}-600`} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Send us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-hello-blue-50 border border-hello-blue-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="text-hello-blue-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-hello-blue-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-hello-blue-700">
                    Thank you for your inquiry. We'll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                        College/Institution
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your college name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Move-in Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="date"
                          id="moveInDate"
                          name="moveInDate"
                          value={formData.moveInDate}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hello-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your accommodation requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-hello-blue-500 to-hello-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-hello-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-hello-blue-800 mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="text-hello-blue-700 mb-4">
                  For urgent inquiries, call us directly or send a WhatsApp message.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+917021174615"
                    className="flex items-center space-x-2 bg-hello-blue-500 text-white px-4 py-2 rounded-lg hover:bg-hello-blue-600 transition-colors"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919820072322?text=Hi%20Hello%20Student%20team,%20I%20need%20immediate%20assistance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                  {/* <a
                    href="mailto:support@hellostudent.in"
                    className="flex items-center space-x-2 bg-hello-blue-500 text-white px-4 py-2 rounded-lg hover:bg-hello-blue-600 transition-colors"
                  >
                    <Mail size={16} />
                    <span>Email</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
