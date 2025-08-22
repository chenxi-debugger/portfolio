import { FaCode, FaPalette, FaMobileAlt, FaRobot, FaServer, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa'
const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Full‑Stack Development',
    desc: 'End‑to‑end apps with React, Node.js/Express, and TypeScript/JavaScript.'
  },
  {
    icon: <FaCode />,
    title: 'Frontend Engineering',
    desc: 'Accessible, responsive UI with React, Redux, and Bootstrap.'
  },
  {
    icon: <FaServer />,
    title: 'Backend & APIs',
    desc: 'RESTful services, authentication, file handling, and performance tuning with Node.js/Express.'
  },
  {
    icon: <FaDatabase />,
    title: 'Databases & Data Modeling',
    desc: 'MongoDB, MySQL, PostgreSQL, SQLite — schema design, indexing, and query optimization.'
  },
  {
    icon: <FaTools />,
    title: 'Cloud & DevOps',
    desc: 'AWS deployments, Git/GitHub Actions CI/CD, and Linux/macOS environments.'
  },
  {
    icon: <FaRobot />,
    title: 'AI Integration',
    desc: 'Add intelligent features using OpenAI APIs, embeddings, and RAG workflows.'
  },
   {
     icon: <FaPalette />,
     title: 'Web Design',
     desc: 'Component‑driven layouts and clean design systems built with React & Bootstrap.'
   }
]

export default function Services() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">What I'm Doing</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-lg p-5 text-white shadow hover:shadow-lg">
            <div className="text-2xl mb-3 text-yellow-400">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-6">{s.title}</h3>
            <p className="text-lg text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
