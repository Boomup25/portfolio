import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "HTML/CSS",
      ],
    },
    {
      category: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "RESTful APIs"],
    },
    {
      category: "Database & Cloud",
      items: ["PostgreSQL", "SQL Server", "Railway", "GitHub", "Docker"],
    },
    {
      category: "Tools & Other",
      items: ["Git", "Visual Studio", "VS Code", "Figma", "Agile"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-black hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
