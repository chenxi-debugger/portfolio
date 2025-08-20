'use client'

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    title: 'Personal Development & Career Transition',
    years: '2021 — Present',
    description:
      "Strategic career pivot from law to software development. Intensive self-directed learning in full-stack web technologies. Developed proficiency in modern JavaScript frameworks and backend systems",
  },
  {
    title: 'UC Berkeley School of Law',
    years: '2018 — 2019',
    description:
      "Master of Laws (LL.M.) degree with excellent academic standing. Strengthened analytical skills and cross-cultural competency in a diverse, rigorous academic environment.",
  },
  {
    title: 'Beijing University of Aeronautics and Astronautics',
    years: '2016 — 2021',
    description:
    "Pursued Ph.D. in Law with advanced coursework and research in legal theory. Made strategic decision to pivot career direction due to changing personal and professional priorities during the global pandemic.",
  },
  {
    title: 'Beijing University of Aeronautics and Astronautics',
    years: '2014 — 2016',
    description:
      "Pursued Master's degree in Law, maintaining highest academic standing with first place ranking in the program. Developed advanced research and analytical skills in a competitive academic environment.",
  },
  {
    title: 'Minzu University of China',
    years: '2010 — 2014',
    description:
      "Bachelor's degrees in Law and English. Valedictorian with highest program GPA, awarded annual first-class scholarships and two National Scholarships.",
  },
]

const experience = [
  {
    title: 'Software Engineer Intern',
    years: 'Apr. 2024 — Aug. 2024',
    description:
      "Developed an automated testing framework for an E-commerce website using Java with Selenium WebDriver to ensuring the accuracy and reliability of the website. Implemented MySQL to interact with the users’ database, executing queries to validate data integrity and perform data-driven testing, resulting in a significant 20% improvement in data processing speed. Used MyBatis to streamline the mapping between Java objects and SQL databases, enhancing database operations and data management.",
  },
  {
    title: 'Civil Code Research Contributor',
    years: '2016 — 2018',
    description:
      "Participated in drafting judicial interpretations for China\'s landmark Civil Code legislation under senior academic supervision. Conducted comprehensive legal research and contributed to authoritative legal publications, showcasing meticulous research skills and ability to work on complex, high-impact projects.",
  },
  {
    title: 'Pro Bono Legal Aid Volunteer',
    years: '2011 — 2017',
    description:
      'Pro bono legal aid volunteer providing free legal services to underserved communities including low-income and disabled individuals. Demonstrated strong research abilities, client advocacy skills, and commitment to social impact through consistent 6-year service.',
  },
]

const skills = [
  { name: 'JavaScript/TypeScript', percent: 75 },
  { name: 'React/Frontend', percent: 80 },
  { name: 'Node.js/Backend', percent: 70 },
  { name: 'MongoDB/Database', percent: 65 },
  { name: 'HTML/CSS', percent: 85 },
  { name: 'AI Integration', percent: 60 },
]

export default function ResumePage() {
  return (
    <div className="px-6 py-10 text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Resume
        <div className="h-1 w-8 bg-cyan-400 mt-2 rounded"></div>
      </h1>

      {/* Timeline Sections */}
      <div className="space-y-12">
        {/* Education */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-cyan-400 text-xl p-2 bg-[#1e293b] rounded-full">
              <FaGraduationCap />
            </div>
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <ul className="relative border-l-2 border-gray-700 pl-6 space-y-10">
            {education.map((item, idx) => (
              <li key={idx} className="relative">
                <span className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[31px] top-1.5"></span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-cyan-400 mb-1">{item.years}</p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-cyan-400 text-xl p-2 bg-[#1e293b] rounded-full">
              <FaBriefcase />
            </div>
            <h2 className="text-xl font-semibold">Experience</h2>
          </div>
          <ul className="relative border-l-2 border-gray-700 pl-6 space-y-10">
            {experience.map((item, idx) => (
              <li key={idx} className="relative">
                <span className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[31px] top-1.5"></span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-cyan-400 mb-1">{item.years}</p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">My Skills</h2>
        <div className="bg-[#1e293b] p-6 rounded-xl space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-white">{skill.name}</span>
                <span className="text-sm font-semibold text-white">{skill.percent}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div
                  className="h-2 rounded bg-purple-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
