'use client'

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    title: 'University School Of The Arts',
    years: '2007 — 2008',
    description:
      'Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    title: 'New York Academy Of Art',
    years: '2006 — 2007',
    description:
      'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.',
  },
  {
    title: 'High School Of Art And Design',
    years: '2002 — 2004',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.',
  },
]

const experience = [
  {
    title: 'Creative Director',
    years: '2015 — Present',
    description:
      'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quvas molestias exceptur.',
  },
  {
    title: 'Art Director',
    years: '2013 — 2015',
    description:
      'Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quvas molestias exceptur.',
  },
  {
    title: 'Web Designer',
    years: '2010 — 2013',
    description:
      'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quvas molestias exceptur.',
  },
]

const skills = [
  { name: 'Web Design', percent: 80 },
  { name: 'Graphic Design', percent: 70 },
  { name: 'Branding', percent: 90 },
  { name: 'WordPress', percent: 50 },
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
