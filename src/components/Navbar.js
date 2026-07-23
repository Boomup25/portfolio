import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Projects", "Skills", "About", "Contact"];

  return (
    <motion.nav
      className="fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-lg font-semibold tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Colin
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:text-black transition-colors"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                //transition={{ delay: index * 0.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 border-t border-gray-200/30">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:text-black hover:bg-gray-100/50 transition"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
