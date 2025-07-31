'use client'

import { useState } from 'react'
import Image from 'next/image'

const filters = ['All', 'Web design', 'Applications', 'Web development']

const projects = [
  {
    title: 'Weatherstack',
    category: 'Web development',
    image: '/portfolio/weatherstack.png',
    projectLink: 'https://bootcamp-project1-weatherstack.vercel.app/',
    githubLink: 'https://github.com/chenxi-debugger/bootcamp-project1'
  },
  {
    title: 'Covilla',
    category: 'Web development',
    image: '/portfolio/covilla.png',
    projectLink: 'https://bootcamp-project2-covilla-webflow.vercel.app/',
    githubLink: 'https://github.com/chenxi-debugger/Bootcamp-Second-Project'
  },
  {
    title: 'salinaka-ecommerce',
    category: 'Web design',
    image: '/portfolio/salinaka.png',
    projectLink: 'https://bootcamp-project3-salinaka-ecommerc.vercel.app/',
    githubLink: 'https://github.com/chenxi-debugger/Bootcamp-Project3-salinaka-ecommerce-react'
  },
  {
    title: 'Data Analysis',
    category: 'Applications',
    image: '/portfolio/analytics.png',
    projectLink: 'https://analytics-dashboard-fullstack.onrender.com/',
    githubLink: 'https://github.com/chenxi-debugger/analytics_dashboard_fullstack'
  },
  {
    title: 'Portfolio',
    category: 'Web design',
    image: '/portfolio/portfolio.png',
    projectLink: 'https://portfolio-nine-ruddy-27.vercel.app/',
    githubLink: 'https://github.com/yourname/portfolio'
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="px-6 py-10 text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Portfolio
        <div className="h-1 w-8 bg-cyan-400 mt-2 rounded"></div>
      </h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-6 mb-10 text-sm font-medium">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`transition-colors ${
              activeFilter === filter ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div key={project.title} className="space-y-2">
            {/* 图片点击跳转项目链接 */}
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={0} // 让高度自适应
                className="w-full h-auto object-contain"
              />
            </a>

            {/* 标题点击跳转 GitHub */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold block hover:text-cyan-400 transition"
            >
              {project.title}
            </a>
            <p className="text-sm text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
