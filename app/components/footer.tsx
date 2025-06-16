
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f5fd0] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/hello_student_logo.png"
                  alt="Hello Student Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hello Student</h3>
                <p className="text-sm text-gray-400">Premium Student Accommodation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
            Experience seamless student living with thoughtfully curated spaces, premium amenities, and unmatched comfort — your ideal home away from home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-hello-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-hello-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-hello-yellow-400 transition-colors">
                  Photos & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-hello-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-hello-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:support@hellostudent.in"
                  className="text-gray-300 hover:text-hello-yellow-400 transition-colors"
                >
                  support@hellostudent.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-hello-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+917021174615"
                  className="text-gray-300 hover:text-hello-yellow-400 transition-colors"
                >
                  +91 70211 74615 / 9820072322
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={20} className="text-blue-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/919820072322?text=Hi%20Hello%20Student%20team,%20I%20am%20interested%20in%20learning%20more%20about%20your%20student%20accommodation%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-hello-yellow-400 transition-colors"
                >
                  WhatsApp: +91 98200 72322
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={24} className="text-hello-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                Vallabh yog, Pushpa Park, Malad East, Mumbai 400097, Maharashtra, India<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 Hello Student. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>for students in Mumbai.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
