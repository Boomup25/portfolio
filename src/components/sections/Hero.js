import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center max-w-4xl px-4">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="text-blue-600">Colin</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Full-stack developer passionate about building elegant solutions to
          complex problems. Specializing in React, C#, and cloud technologies.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
