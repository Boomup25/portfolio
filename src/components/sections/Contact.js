import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email service here (SendGrid, Nodemailer, etc.)
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 bg-gray-50"
    >
      <div className="max-w-2xl mx-auto px-4 w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://github.com/Boomup25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-lg font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-lg font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="mailto:colinharrison07@gmail.com"
            className="text-gray-600 hover:text-black text-lg font-semibold"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
