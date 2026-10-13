import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { desc } from 'framer-motion/client'

function App() {
  const [activeTab, setActiveTab] = useState('profile')

  // Real engineering skills from your CV
  const skills = ["C# "," Unity", "Game Architecture", "UI/UX Layouts", "Debugging", "Optimization","Web Development"]
  
  // Real game development projects from your CV
  const projects = [
    { name: "Scary Teacher 3D",
       desc: "Simulation game. Created immersive visuals using timeline and specialized mini-game features.",
      url: "https://play.google.com/store/apps/details?id=com.zakg.scaryteacher.hellgame&hl=en"  },
  
    { name: "Birth Centre Tycoon", desc: "Engineered updates, troubleshot strict test cases, and met production deadlines." ,
      url:"https://play.google.com/store/apps/details?id=com.genigames.idle.confinementcentre.tycoon"
    },
    { name : "Pull the String", desc:"I worked on creating and designing levels and making the game visually appealing.",
      url:" https://play.google.com/store/apps/details?id=com.zatg.rescue.quest"
    },
    {name : "Real Estate Tycoon", desc:"I worked on implementing new features, User Interface ,testing and debugging the game.",
      url : "https://play.google.com/store/apps/details?id=com.genigames.rental.property.tycoon&hl=en"
    }
  ]

  // Floating background decorative element map [emoji, top, left, delay, duration]
  const floatingItems = [
    { emoji: "🌟", top: "15%", left: "10%", delay: 0, duration: 4 },
    { emoji: "💖", top: "25%", left: "82%", delay: 1, duration: 5 },
    { emoji: "✨", top: "70%", left: "12%", delay: 0.5, duration: 3.5 },
    { emoji: "👻", top: "65%", left: "88%", delay: 1.5, duration: 6 },
    { emoji: "🌟", top: "45%", left: "90%", delay: 2, duration: 4.5 },
    { emoji: "💖", top: "78%", left: "8%", delay: 0.2, duration: 5.5 },
    { emoji: "👾", top: "10%", left: "78%", delay: 1.2, duration: 7 }
  ]

  return (
    <div className="bg-[#e0f2fe] min-h-screen text-[#2c2447] font-mono flex flex-col items-center justify-center p-4 overflow-x-hidden relative selection:bg-pink-400 selection:text-white">
      
      {/* 🌐 RAW CSS INJECTED BACKGROUND GRID & UTILITIES */}
      <style>{`
        .retro-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          perspective: 500px;
        }
        .retro-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, #bae6fd 2px, transparent 2px),
            linear-gradient(to bottom, #bae6fd 2px, transparent 2px);
          background-size: 50px 50px;
          transform: rotateX(60deg) translateY(0px);
          transform-origin: top center;
          height: 200%;
          animation: gridScroll 12s linear infinite;
        }
        @keyframes gridScroll {
          0% { transform: rotateX(60deg) translateY(0px); }
          100% { transform: rotateX(60deg) translateY(50px); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f472b6;
          border-radius: 4px;
        }
      `}</style>

      {/* PERSPECTIVE BACKGROUND WRAPPER */}
      <div className="retro-container">
        <div className="retro-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] via-transparent to-white/40" />
      </div>

      {/* 🎀 FLOATING MARGIN ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden sm:block">
        {floatingItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute text-2xl"
            style={{ 
              top: item.top, 
              left: item.left,
              textShadow: '0 2px 0 #ffffff'
            }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* 👾 RETRO ARCADE TOP MARQUEE */}
      <div className="text-center mb-8 relative z-20">
        <div className="text-xs font-black tracking-widest text-pink-500 uppercase mb-2 animate-bounce bg-white/80 px-3 py-1 rounded-full shadow-xs border border-pink-200 inline-block">
          ★ LEVEL 01 - START NEW GAME ★
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-pink-500 to-purple-600" style={{ textShadow: '0 2px 0 #ffffff' }}>
          SAROSH'S PORTFOLIO
        </h1>
      </div>

      {/* 🕹️ MAIN CENTER PIECE: THE HANDHELD CONSOLE */}
      <motion.div 
        className="w-full max-w-md bg-gradient-to-b from-pink-400 to-pink-500 rounded-3xl p-6 border-4 border-[#2c2447] relative z-20 shadow-[0_12px_0_#bd2b70,0_20px_40px_rgba(44,36,71,0.25)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* TOP SCREEN INSET */}
        <div className="bg-[#161224] rounded-xl p-4 border-4 border-[#2c2447] min-h-[230px] flex flex-col justify-between relative overflow-hidden">
  




          {/* Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />
          
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div 
                key="profile" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="text-center flex flex-col items-center justify-center h-full py-2 z-10"
              >
                                <h2 className="text-lg font-black text-pink-300 mt-3 tracking-wide">Sarosh Javed</h2>
                <p className="text-[11px] text-cyan-300 mt-1 max-w-[240px] leading-relaxed">Software Engineer & Game Developer building immersive worlds.</p>
              </motion.div> 
            )}

                
               {/* 🎀 AVATAR IMAGE BOUNCE */}
<motion.div 
  className="w-20 h-20 bg-purple-950 rounded-full border-4 border-pink-300 overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(244,114,182,0.3)]"
  animate={{ y: [0, -6, 0] }}
  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
>
  <img 
    src="/hirasawa.jpg" 
    alt="Sarosh's Avatar" 
    className="w-full h-full object-cover"
  />
</motion.div>

/*
            {/* {activeTab === 'projects' && (
              <motion.div 
                key="projects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-2 text-left z-10 text-[#f5edff]"
              >
                <div className="text-xs font-bold text-pink-400 border-b border-pink-500/20 pb-1 mb-1 tracking-wider">🕹️ MISSIONS LOG:</div>
                <div className="max-h-[150px] overflow-y-auto space-y-2 pr-1 custom-scrollbar text-[11px]">
                  {projects.map((p, idx) => (
                    <div key={idx} className="bg-purple-950/60 p-2 rounded border border-purple-800/40">
                      <span className="font-bold text-white block">{p.name}</span>
                      <span className="text-gray-400 block mt-0.5 leading-tight">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )} */}
            */
                        {activeTab === 'projects' && (
              <motion.div 
                key="projects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-2 text-left z-10 text-[#f5edff]"
              >
                <div className="text-xs font-bold text-pink-400 border-b border-pink-500/20 pb-1 mb-1 tracking-wider">🕹️ MISSIONS LOG:</div>
                <div className="max-h-[150px] overflow-y-auto space-y-2 pr-1 custom-scrollbar text-[11px]">
                  {projects.map((p, idx) => (
                    <a 
                      key={idx} 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block bg-purple-950/60 p-2 rounded border border-purple-800/40 hover:border-pink-400 hover:bg-purple-900/60 transition-all cursor-pointer group"
                    >
                      {/* Clicking anywhere on this card box will open your link! */}
                      <span className="font-bold text-white block group-hover:text-pink-300 transition-colors">
                        {p.name} ↗
                      </span>
                      <span className="text-gray-400 block mt-0.5 leading-tight">
                        {p.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}


            {activeTab === 'skills' && (
              <motion.div 
                key="skills" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="text-left z-10"
              >
                <div className="text-xs font-bold text-purple-300 border-b border-purple-500/20 pb-1 mb-2 tracking-wider">⚡ ABILITIES MATRIX:</div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s, idx) => (
                    <span key={idx} className="bg-[#241b3d] text-pink-300 text-[10px] px-2.5 py-1.5 rounded border border-pink-500/20 font-bold uppercase tracking-wider">
                      +{s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
                {/* 🎮 LOWER CONTROLLER BUTTONS */}
        <div className="mt-6 grid grid-cols-3 items-center">
          {/* DIRECTIONAL D-PAD */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute w-6 h-20 bg-[#2d2544] rounded-md" />
            <div className="absolute h-6 w-20 bg-[#2d2544] rounded-md" />
            <div className="absolute w-5 h-5 bg-[#3e345b] rounded-xs z-10" />
          </div>

          {/* SLANTED OPTIONS BUTTONS */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="w-8 h-2.5 bg-[#2d2544] rounded-full transform -rotate-12" />
            <div className="w-8 h-2.5 bg-[#2d2544] rounded-full transform -rotate-12" />
          </div>

          {/* INTERACTIVE MENU TRIGGER SWITCHES */}
          <div className="flex flex-col gap-2 items-end pr-2">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`w-11 h-11 rounded-full font-bold text-[10px] border-2 shadow-md transition-all active:translate-y-0.5 cursor-pointer ${activeTab === 'profile' ? 'bg-cyan-400 text-black border-white scale-105' : 'bg-[#2d2544] text-pink-400 border-pink-500/30 hover:bg-[#392f55]'}`}
            >
              INFO
            </button>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`w-11 h-11 rounded-full font-bold text-[10px] border-2 shadow-md transition-all active:translate-y-0.5 cursor-pointer ${activeTab === 'projects' ? 'bg-purple-400 text-black border-white scale-105' : 'bg-[#2d2544] text-pink-400 border-pink-500/30 hover:bg-[#392f55]'}`}
              >
                WORK
              </button>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`w-11 h-11 rounded-full font-bold text-[10px] border-2 shadow-md transition-all active:translate-y-0.5 cursor-pointer ${activeTab === 'skills' ? 'bg-rose-400 text-black border-white scale-105' : 'bg-[#2d2544] text-pink-400 border-pink-500/30 hover:bg-[#392f55]'}`}
              >
                POW
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FOOTER ACCENTS */}
      <footer className="mt-8 text-[9px] text-[#2c2447]/60 font-bold uppercase tracking-widest relative z-20 bg-white/40 px-4 py-1.5 rounded-full border border-sky-200/50">
        © {new Date().getFullYear()} SAROSH JAVED • OPERATE PANEL OPTIONS
      </footer>
    </div>
  )
}

export default App



        
       

