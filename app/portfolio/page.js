'use client'

import { useState } from 'react'
import Image from 'next/image'

const filters = ['All', 'Web design', 'Applications', 'Web development']

const projects = [
  { title: 'Finance', category: 'Web development', image: '/portfolio/finance.jpg' },
  { title: 'Orizon', category: 'Web development', image: '/portfolio/orizon.png' },
  { title: 'Fundo', category: 'Web design', image: '/portfolio/fundo.jpg' },
  { title: 'Brawlhalla', category: 'Applications', image: '/portfolio/brawlhalla.png' },
  { title: 'DSM.', category: 'Web design', image: '/portfolio/dsm.png' },
  { title: 'MetaSpark', category: 'Web design', image: '/portfolio/metaspark.png' },
  { title: 'Summary', category: 'Web development', image: '/portfolio/summary.png' },
  { title: 'Task Manager', category: 'Applications', image: '/portfolio/taskmanager.jpg' },
  { title: 'Arrival', category: 'Web development', image: '/portfolio/arrival.png' },
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
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
