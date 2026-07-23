import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">Colin</h3>
            <p className="text-gray-400 mt-2">Full-stack Developer</p>
          </motion.div>

          <motion.div
            className="flex gap-8 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© 2026 Colin Harrison. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
