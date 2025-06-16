
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Star, 
  Quote, 
  User, 
  MapPin, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera
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

export default function GalleryPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    '/gallery_1.png',
    '/gallery_2.png',
    '/gallery_3.png',
    '/gallery_4.png',
    '/gallery_5.png',
    '/gallery_6.png',
    '/gallery_7.png',
    '/gallery_8.png'
  ];

  const testimonials = [
    {
      id: 1,
      name: "Gunjan Buchwani",
      college: "Nagindas Khandwala College",
      rating: 5,
      text: "Hello Students was the first PG I chose when I moved to Mumbai, and it instantly felt like home. The space is super comfortable, student-friendly, and the services are honestly the best in town. The team is always helpful and quick to respond whenever there’s a need. The society is great too, making it a safe and peaceful place to live. I’ve stayed here for a year and I’m happy to extend my stay for another — it’s been that good!",
      image: "Gunjan.jpeg",
      duration: "2 years"
    },
    {
      id: 2,
      name: "Archit Shah ",
      college: "Mumbai University",
      rating: 5,
      text: "Staying at this PG has been a truly hassle-free and comfortable experience. It’s well-equipped with all essentials like high-speed WiFi, AC, fridge, gas, geyser, and daily housekeeping. The space is clean, peaceful, and feels like home. A special mention to the PG owners, Vipul Bhai and Rohit Bhai, who are incredibly supportive and treat everyone like family. Their care and approachability make this place feel safe and welcoming. Highly recommended!",
      image: "https://i.pinimg.com/originals/4e/6e/a0/4e6ea038c8b254d2ceb4862685974d4d.png",
      duration: "1.5 years"
    },
    {
      id: 3,
      name: "Neharika Singh",
      college: "NAEMD Institute",
      rating: 5,
      text: "I have spent 2.5 years of my life in Mumbai in the PG, and i must admit that it provides with the most safe places which you can call your home. Top-Notch Safety, and Comfort. It is scary to be in a new city, and hello student provides you with so much of freedom to talk and negotiate with. Your problems or doubts are heard and acknowledged here. I will forever be grateful that i chose to find a PG through them.",
      image: "Neharika.jpeg",
      duration: "8 months"
    },
    {
      id: 4,
      name: "Arjun Singh",
      college: "NEST Academy",
      rating: 5,
      text: "Best decision I made for my studies in Mumbai! The environment is perfect for focusing on academics, yet there's a great social atmosphere. The laundry service saves so much time, and having doctors on call is reassuring. Highly recommend!",
      image: "https://img.freepik.com/premium-photo/young-indian-student-with-backpack-giving-thumbs-up_928503-87.jpg",
      duration: "1 year"
    },
    {
      id: 5,
      name: "Kavya Nair",
      college: "Bombay College of Pharmacy",
      rating: 5,
      text: "The technology integration is impressive - from booking to maintenance requests, everything is so smooth. The common areas are great for group studies, and I've made lifelong friends here. The value for money is unbeatable in Mumbai!",
      image: "https://img.freepik.com/premium-photo/beautiful-delhi-indian-medical-student-girl-holding-books-her-hand-wearing-white-apron-with-stethoscope-around-her-neck-smiling-realistic_947814-105320.jpg",
      duration: "2.5 years"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Photos & <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our premium accommodations and hear from our satisfied students 
              who have made Hello Student their home away from home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take a virtual tour of our premium student accommodations
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-hello-blue-600 hover:bg-white transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-hello-blue-600 hover:bg-white transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImage
                      ? 'bg-hello-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Student <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our happy students about their experience living with Hello Student
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-hello-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="text-hello-blue-600" size={32} />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-hello-yellow-500" size={24} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Student Info */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-hello-blue-600 font-medium">
                    {testimonials[currentTestimonial].college}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center justify-center mt-1">
                    <Calendar size={14} className="mr-1" />
                    Resident for {testimonials[currentTestimonial].duration}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-hello-blue-600 hover:bg-hello-blue-50 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-hello-blue-600 hover:bg-hello-blue-50 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? 'bg-hello-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Video Tour Section
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Virtual <span className="text-gradient">Tour</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take a comprehensive virtual tour of our facilities
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/originals/8a/db/9a/8adb9ad65f8ce85194f3bf1bd20bb589.png"
                alt="Virtual tour preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Play className="text-hello-blue-600 ml-1" size={32} fill="currentColor" />
                </button>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Click to start the virtual tour (Coming Soon)
            </p>
          </div>
        </div>
      </AnimatedSection> */}
    </div>
  );
}
