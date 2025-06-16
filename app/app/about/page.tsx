
'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Lightbulb,
  CheckCircle,
  Star,
  MapPin
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

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every decision we make is centered around enhancing the student experience and ensuring their comfort and success."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "We prioritize the safety and security of our students with 24/7 surveillance and support systems."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage technology to provide seamless, modern living solutions that adapt to student needs."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We foster a sense of community where students can connect, learn, and grow together."
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "1500+",
      label: "Happy Students",
      description: "Students who call our accommodations home"
    },
    {
      icon: Award,
      number: "30+",
      label: "Partner Colleges and Institutions",
      description: "Educational institutions we serve"
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      description: "Years of dedicated service to students"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Student Rating",
      description: "Average satisfaction rating from our residents"
    }
  ];

  const colleges = [
    "Nagindas Khandwala College (Malad)",
    "B. K. Birla College (Kalyan)",
    "Ramanand Arya D.A.V. College (Bhandup)",
    "Garware Institute of Career Education and Development",
    "Kavikulaguru Kalidas Sanskrit University",
    "The IPA-MSB's Bombay College of Pharmacy",
    "NEST Academy of Event Management & Development",
    "NEST Academy of Sports Management",
    "Lifeness Science Institute",
    "NAFDI - School of Interior Design",
    "NAFDI - School of Fashion Design",
    "LivGlobal - Tours & Travel Management",
    "Future Varsity",
    "Global Academy of Professional Accountants",
    "NEST Academy of Modelling & Grooming"
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
                About <span className="text-gradient">Hello Student</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              There's no better place than home, but we work 24/7 to offer the next best thing: safe, thoughtfully designed housing where students feel supported. From ground staff to senior leadership, our team stays hands-on every day to uphold comfort, security, and well-being—so students can focus on what matters most: their education.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-hello-blue-100 rounded-2xl flex items-center justify-center">
                  <Target className="text-hello-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Our Mission</h3>
                  <p className="text-gray-600">Our goal is to ensure every student who joins us enjoys a safe, comfortable, and fulfilling place to live.</p>
                </div>
              </div>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="about-us.png"
                  alt="Hello Student accommodation building"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Hello Student was born from a simple observation: finding quality, affordable, 
                and safe accommodation in Mumbai was one of the biggest challenges facing students. 
                We recognized that students needed more than just a place to stay - they needed 
                a supportive environment that would enhance their academic journey.
              </p>
              <p>
                Founded with the vision of revolutionizing student accommodation, we leverage 
                technology to streamline the house hunting process while maintaining the personal 
                touch that makes a house feel like home. Our team understands the unique needs 
                of students because we've been there ourselves.
              </p>
              <p>
                As of Today, we proudly serve students from over 15 prestigious colleges and institutions 
                across Mumbai, providing them with not just accommodation, but a complete living 
                experience that includes modern amenities, community building, and unwavering support.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="section-padding bg-gradient-to-bl from-blue-50 to-yellow-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience we provide to our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl shadow-lg hover-lift"
                >
                  <div className="w-16 h-16 bg-hello-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-hello-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and student satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center glass-card p-8 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="text-hello-blue-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {achievement.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Partner Colleges Section */}
      <AnimatedSection className="section-padding bg-gradient-to-bl from-blue-50 to-yellow-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Partner <span className="text-gradient">Colleges</span> & Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here is a list of some of our Prestigious Partner Institutions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-hello-blue-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 font-medium">{college}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Locations Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Strategically located near partner colleges with easy access to public transport, 
              healthcare, and essential services.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl mb-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Current Operational Areas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Malad East",
                "Malad West", 
                "Goregaon East",
                "Goregaon West",
                "Kandivali East",
                "Kandivali West",
                "Borivali East",
                "Borivali West",
                "Ram Mandir Road West",
                "Kalyan East",
                "Ghatkopar East",
                "Ghatkopar West",
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card-tie-up p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="text-blue-600" size={20} />
                    <span className="font-semibold text-gray-800">{location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl">
              <p className="text-center text-gray-700 font-medium">
                <CheckCircle className="inline-block text-blue-600 mr-2" size={20} />
                All locations prioritize <span className="text-blue-700 font-bold">safety</span> and 
                <span className="text-blue-700 font-bold"> accessibility</span> to colleges and essential services.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.pinimg.com/736x/da/7c/5e/da7c5e187b12d3f4c7b4437c25691003.jpg"
                  alt="Students in community space"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-hello-blue-100 rounded-2xl flex items-center justify-center">
                  <Eye className="text-hello-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                  <p className="text-hello-blue-600 font-medium">Building the future of student living</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To become the most trusted and preferred student accommodation provider in India, 
                setting new standards for quality, safety, and student satisfaction. We envision 
                a future where every student has access to affordable premium living spaces that support 
                their academic and personal growth.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expand to major educational hubs across India",
                  "Integrate cutting-edge technology for seamless living",
                  "Build sustainable and eco-friendly accommodations",
                  "Create vibrant student communities nationwide"
                ].map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-hello-blue-500" size={20} />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
