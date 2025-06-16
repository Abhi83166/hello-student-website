
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Bed, 
  Wifi, 
  Car, 
  Shield, 
  Utensils, 
  Droplets, 
  Wind, 
  Sparkles, 
  Phone, 
  Stethoscope,
  ArrowRight,
  Star,
  Users,
  MapPin,
  CheckCircle
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

const CountUpNumber = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.8 }}
      className="inline-block"
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration }}
        >
          {end}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
};

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    {
      src: "/bandra_worli_sealink.png",
      alt: "Bandra Worli Sealink"
    },
    {
      src: "/gateway_of_india.png",
      alt: "Gateway of India"
    },
    {
      src: "/juhu_beach.png",
      alt: "Juhu Beach"
    },
    {
      src: "/marine_drive.png",
      alt: "Marine Drive"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const directAmenities = [
    {
      icon: Bed,
      title: "Furnished Rooms",
      description: "Comfortable beds with built-in storage, wardrobes, curtains, and AC",
      color: "hello-blue"
    },
    {
      icon: Utensils,
      title: "Modern Kitchen",
      description: "Fully equipped with refrigerator, microwave, stove, and gas",
      color: "hello-blue"
    },
    {
      icon: Droplets,
      title: "Premium Washrooms",
      description: "Clean washrooms with geyser and shower facilities",
      color: "hello-yellow"
    },
    {
      icon: Wifi,
      title: "Free Unlimited Wi-Fi",
      description: "High-speed internet connectivity for all your needs",
      color: "hello-blue"
    },
    {
      icon: Sparkles,
      title: "Daily Housekeeping",
      description: "Professional cleaning services to keep your space pristine",
      color: "hello-blue"
    },
    {
      icon: Shield,
      title: "24x7 Security",
      description: "Round-the-clock support and CCTV surveillance",
      color: "hello-yellow"
    }
  ];

  const tieUpAmenities = [
    {
      icon: Utensils,
      title: "Home Cooked Meals",
      description: "Nutritious and delicious home-style cooking",
      color: "hello-blue"
    },
    {
      icon: Stethoscope,
      title: "Doctors on Call",
      description: "24/7 medical assistance when you need it",
      color: "hello-blue"
    },
    {
      icon: Wind,
      title: "Laundry Service",
      description: "Convenient laundry facilities and services",
      color: "hello-yellow"
    }
  ];

  const stats = [
    { number: 1500, label: "Happy Students", suffix: "+" },
    { number: 30, label: "Partner Colleges", suffix: "+" },
    { number: 60, label: "Premium Locations", suffix: "+" },
    { number: 97, label: "Satisfaction Rate", suffix: "%" }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block mb-2"
                >
                  Hassle Free
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block mb-2"
                >
                  Budget Friendly
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="block"
                >
                  <span className="text-white">and Safe</span>{" "}
                  <span className="easy-text">Accommodation</span>
                </motion.span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow">
              Experience seamless student living with thoughtfully curated spaces, premium amenities, and unmatched comfort — your ideal home away from home
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Find Your Space
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                {/* <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur text-hello-blue-600 font-semibold rounded-full border-2 border-white/50 hover:bg-white transition-all duration-300"
                >
                  View Gallery
                </Link> */}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex space-x-2 mt-8">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.pinimg.com/originals/02/1c/e5/021ce558e7f963bd8450b4478a087552.jpg"
                  alt="Premium student accommodation room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gender Specific Accommodation Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative h-[300px] lg:h-[500px]">
                <Image
                  src="/gender_specifc_image.png"
                  alt="Gender specific accommodations"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                        <Users className="text-white" size={40} />
                      </div>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      Separate Accommodations for<br />
                      <span className="text-yellow-300">Girls, Boys, Women and Men</span>
                    </h2>
                    <p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto">
                      Safe, secure, and comfortable living spaces designed specifically for your needs
                    </p>
                    <div className="flex justify-center mt-6 space-x-4">
                      <div className="flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                        <Shield className="text-hello-blue-400 mr-2" size={20} />
                        <span className="text-white font-medium">24/7 Security</span>
                      </div>
                      <div className="flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                        <CheckCircle className="text-hello-blue-400 mr-2" size={20} />
                        <span className="text-white font-medium">Gender Specific</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="section-padding bg-yellow-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  <CountUpNumber end={stat.number} />
                  {stat.suffix}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Amenities Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Premium <span className="text-gradient">Amenities</span> & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comfort and convenience with our comprehensive range of amenities 
              designed specifically for student living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              const pastelColors = [
                'bg-blue-50', 'bg-pink-50', 'bg-purple-50', 
                'bg-indigo-50', 'bg-cyan-50', 'bg-teal-50'
              ];
              const iconColors = [
                'text-blue-600', 'text-pink-600', 'text-purple-600',
                'text-indigo-600', 'text-cyan-600', 'text-teal-600'
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${pastelColors[index]} p-8 rounded-2xl shadow-lg hover-lift group transition-all duration-300 border border-white/50`}
                >
                  <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className={iconColors[index]} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Tie-ups Section */}
          <div className="mt-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              <span className="text-gradient">TIE-UPS</span> & ADD-ONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tieUpAmenities.map((amenity, index) => {
                const Icon = amenity.icon;
                const pastelColors = ['bg-orange-50', 'bg-green-50', 'bg-violet-50'];
                const iconColors = ['text-orange-600', 'text-green-600', 'text-violet-600'];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${pastelColors[index]} p-8 rounded-2xl shadow-lg hover-lift group transition-all duration-300 border border-white/50 relative`}
                  >
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      PARTNER SERVICE
                    </div>
                    <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Icon className={iconColors[index]} size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {amenity.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="section-padding bg-gradient-to-bl from-yellow-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-gradient">Hello Student</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand the unique needs of students and provide tailored solutions 
                that make your academic journey comfortable and worry-free.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Safe & Secure",
                    description: "24/7 security with CCTV surveillance for your peace of mind"
                  },
                  {
                    icon: Users,
                    title: "Student Community",
                    description: "Connect with like-minded students from top colleges"
                  },
                  {
                    icon: MapPin,
                    title: "Prime Locations",
                    description: "Strategically located near major colleges and universities"
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/student_community.png"
                  alt="Students enjoying community living"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-50 to-blue-50 p-3 rounded-2xl shadow-xl border border-blue-100/50">
                <div className="flex items-center space-x-1">
                  <Star className="text-hello-yellow-500" size={16} fill="currentColor" />
                  <span className="font-semibold text-gray-800 text-sm">4.9/5</span>
                </div>
                <p className="text-xs text-gray-600">Student Rating</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ready to Find Your Perfect <span className="text-gradient">Student Home</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied students who have found their ideal accommodation with Hello Student. 
            Let us help you find your home away from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+917021174615"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
