import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              elegant, user-friendly applications. With experience in both
              frontend and backend technologies, I enjoy building complete
              solutions from concept to deployment.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I'm particularly interested in cloud technologies, responsive
              design, and building applications that solve real problems. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently, I'm focused on expanding my portfolio and building
              innovative projects that showcase my skills and creativity.
            </p>
          </motion.div>

                  <motion.div
                      className="rounded-2xl overflow-hidden h-96 md:h-auto"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                  >
                      <img
                          src="/portrait.jpg"
                          alt="Colin"
                          className="w-full h-full object-cover"
                      />
                  </motion.div>
        </div>
      </div>
    </section>
  );
}
