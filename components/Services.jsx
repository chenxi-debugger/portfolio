import { FaCode, FaPalette, FaMobileAlt, FaRobot, FaServer, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa'
const services = [
  { icon: <FaPalette />, title: 'Web Design', desc: 'The most modern and high-quality design made at a professional level.' },
  { icon: <FaCode />, title: 'Web Development', desc: 'High-quality development of sites at the professional level.' },
  { icon: <FaMobileAlt />, title: 'Mobile Apps', desc: 'Professional development of applications for iOS and Android.' },
  { icon: <FaRobot />, title: 'AI Integration', desc: 'Implement intelligent features using modern AI APIs like OpenAI and embeddings.' },
  { icon: <FaServer />, title: 'Backend Development', desc: 'Robust and scalable backend services with Node.js, Express, and databases.' },
  { icon: <FaTools />, title: 'DevOps & Deployment', desc: 'Automated deployment pipelines and CI/CD with AWS and modern tools.' },
  // { icon: <FaDatabase />, title: 'Database Design', desc: 'Efficient database schema design and query optimization with MongoDB and MySQL.' },
  // { icon: <FaLaptopCode />, title: 'Fullstack Development', desc: 'End-to-end development with modern frontend and backend technologies.' }

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
