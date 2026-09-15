import { motion } from "framer-motion";

export default function Projects() {
  const JetskiProject = [
    {
      title: "Jetski Maintenance Tracker",
      description:
        "Full-stack app for tracking jetski maintenance schedules. Built with React, C#, PostgreSQL, and deployed on Railway.",
      tech: ["React", "C#", "PostgreSQL", "Railway", "Framer Motion"],
      link: "https://frontend-production-9c1d.up.railway.app",
      image: "/jetski-preview.png",
    },
  ];
  const JarvisProject = [
    {
      title: "Jarvis Personal Assistant",
      description:
        "Next.js app that uses OpenRouters API to create a personal assistant and allowing the user to choose different LLM models. Built with React, PostgreSQL, and deployed on Railway.",
      tech: ["React", "PostgreSQL", "Railway", "Next.js", "OpenRouters API"],
      link: "https://jarvis-production-83c4.up.railway.app/",
      image: "/jarvis-preview.png",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Some of my recent work and passion projects
        </motion.p>

        <div className="grid gap-8">
          {JetskiProject.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="rounded-xl overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit px-6 py-2 border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8">
          {JarvisProject.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="rounded-xl overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit px-6 py-2 border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
