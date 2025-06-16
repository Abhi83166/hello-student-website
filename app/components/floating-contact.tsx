
'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@hellostudent.in?subject=Inquiry about Student Accommodation&body=Hi Hello Student team,%0D%0A%0D%0AI am interested in learning more about your student accommodation services in Mumbai.%0D%0A%0D%0APlease provide me with more details.%0D%0A%0D%0AThank you!';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917021174615';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919820072322?text=Hi%20Hello%20Student%20team,%20I%20am%20interested%20in%20learning%20more%20about%20your%20student%20accommodation%20services.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[280px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Contact Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleEmailClick}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-hello-blue-50 hover:bg-hello-blue-100 transition-colors group"
              >
                <div className="p-2 bg-hello-blue-500 text-white rounded-lg group-hover:bg-hello-blue-600 transition-colors">
                  <Mail size={16} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800">Email Us</div>
                  <div className="text-sm text-gray-600">support@hellostudent.in</div>
                </div>
              </button>
              
              <button
                onClick={handlePhoneClick}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-hello-blue-50 hover:bg-hello-blue-100 transition-colors group"
              >
                <div className="p-2 bg-hello-blue-500 text-white rounded-lg group-hover:bg-hello-blue-600 transition-colors">
                  <Phone size={16} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800">Call Us</div>
                  <div className="text-sm text-gray-600">+91 70211 74615</div>
                </div>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <div className="p-2 bg-blue-500 text-white rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MessageCircle size={16} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800">WhatsApp</div>
                  <div className="text-sm text-gray-600">+91 98200 72322</div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-hello-blue-500 to-hello-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 float-animation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
