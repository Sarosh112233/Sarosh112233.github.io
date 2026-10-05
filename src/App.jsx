import React from 'react'
import { motion } from 'framer-motion'

function App() {
  // Your real professional skills extracted from your CV
  const skills = [
    "C# & Unity Development", "Web Development", "Software Debugging", 
    "Performance Optimization", "UI/UX Implementation", "Cross-Functional Collaboration"
  ]

  // Your real game development & software engineering projects
  const projects = [
    { name: "Scary Teacher 3D", desc: "Simulation game. Created immersive visuals using timeline and implemented specialized mini-game features.", tags: ["Unity", "C#", "Timeline"] },
    { name: "Fashion Tycoon", desc: "Served as a core developer implementing key gameplay systems and dynamic user features.", tags: ["Game Dev", "C#", "UI"] },
    { name: "Birth Centre Tycoon", desc: "Engineered new updates, troublesated strict test cases, and consistently met tight production deadlines.", tags: ["Optimization", "C#"] },
    { name: "RealEstateTycoon", desc: "Built dynamic user interfaces, integrated new features, and handled end-to-end debugging workflows.", tags: ["UI/UX", "Testing"] },
    { name: "Pull the String", desc: "Designed, mapped, and mathematically constructed engaging, visually stunning level architectures.", tags: ["Level Design", "Visuals"] }
  ]

  return (
    <div className="bg-[#0f0f12] text-[#f3f4f6] font-sans min-height-screen selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* 🧭 NAV BAR */}
      <nav className="flex justify-between items-center px-8 py-5 bg-[#16161d]/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-500/10">
        <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-rose-300">
          SAROSH.DEV
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-rose-400 transition-colors">Skills</a>
        </div>
      </nav>

      {/* 👋 HERO / INTRO HEADER SECTION */}
      <header id="about" className="max-w-4xl mx-auto text-center pt-24 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 uppercase">
            Software Engineer & Game Developer
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mt-6 tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">Sarosh Javed</span>
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I design high-performance interactive environments, robust application scales, and modern web systems. 
          Expert in Unity engine compilation, system debugging, and fluid frontend workflows.
        </motion.p>
      </header>

      {/* 📁 PROJECTS ANIMATED GRID */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Featured Engineering Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              className="p-6 rounded-2xl bg-[#16161d] border border-gray-800/60 hover:border-pink-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap mt-6">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#22222f] text-purple-300 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🛠️ TECH STACK / SKILLS SECTION */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10 text-white">Core Technical Capabilities</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <motion.span 
              key={idx}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-[#16161d] to-[#121217] border border-gray-800 text-sm font-medium text-gray-300 hover:text-white shadow-md"
              whileHover={{ scale: 1.08, borderColor: '#f472b6', boxShadow: '0 0 15px rgba(244,114,182,0.15)' }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* 📝 FOOTER */}
      <footer className="text-center py-12 border-t border-gray-900 text-xs text-gray-600 tracking-wider">
        © {new Date().getFullYear()} SAROSH JAVED • BUILT WITH REACT & TAILWIND v4
      </footer>
    </div>
  )
}

export default App
