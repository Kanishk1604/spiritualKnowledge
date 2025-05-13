
import { Link } from "react-router-dom";
import { Heart, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-[#0f1525] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Bhagavad Wisdom */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">
              Bhagavad Wisdom
            </h3>
            <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
              Discover ancient wisdom for modern life through the timeless teachings of the Bhagavad Gita.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">Features</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/problem-solver" className="hover:text-white transition-colors">
                  Problem Solver
                </Link>
              </li>
              <li>
                <Link to="/dream-interpreter" className="hover:text-white transition-colors">
                  Dream Interpreter
                </Link>
              </li>
              <li>
                <Link to="/mood-mantra" className="hover:text-white transition-colors">
                  Mood-Based Mantras
                </Link>
              </li>
              <li>
                <Link to="/affirmations" className="hover:text-white transition-colors">
                  Goal Affirmations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          {/* Social Media Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>

            <p className="text-sm text-gray-400">
              © {year} Bhagavad Wisdom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
