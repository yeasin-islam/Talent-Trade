import React, { useState, useEffect } from 'react'

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const slides = [
    "Where Talents Meet Opportunities",
    "Connect • Create • Collaborate", 
    "Build Your Dream Career"
  ]

  const features = [
    { icon: "🚀", title: "Launch Career", desc: "Start your professional journey with confidence", color: "primary" },
    { icon: "💼", title: "Find Projects", desc: "Discover exciting opportunities that match your skills", color: "secondary" },
    { icon: "🌟", title: "Showcase Skills", desc: "Build your portfolio and stand out from the crowd", color: "accent" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-base-100"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--p) / 0.3) 0%, 
            hsl(var(--s) / 0.2) 30%, 
            hsl(var(--a) / 0.15) 60%, 
            transparent 80%)`
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-4 border-accent/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/15 transform rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6  ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          
          {/* Left side - Content */}
          <div className="text-base-content space-y-8">
            {/* Logo section */}
            <div className="space-y-4">
              <div className="relative">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 text-primary/30 animate-pulse">TALENT</span>
                    <span className="relative text-primary">TALENT</span>
                  </span>
                </h1>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider -mt-2">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 text-secondary/30 animate-pulse" style={{animationDelay: '0.5s'}}>TRADE</span>
                    <span className="relative text-secondary">TRADE</span>
                  </span>
                </h1>
              </div>
              
              {/* Animated line */}
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            </div>

            {/* Dynamic subtitle */}
            <div className="h-20 flex items-center">
              <p className="text-xl lg:text-2xl xl:text-3xl font-light text-base-content/80 transition-all duration-1000 transform">
                {slides[currentSlide]}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-base-content/70 leading-relaxed max-w-lg">
              Join the premier platform where talented professionals connect with exciting opportunities. 
              Build your career, showcase your expertise, and collaborate with industry leaders.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 btn btn-primary btn-lg rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start Trading
                </div>
              </button>
              
              <button className="group relative px-8 py-4 btn btn-outline btn-primary btn-lg rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Explore Platform
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              {[
                { number: "10K+", label: "Active Users" },
                { number: "5K+", label: "Projects" },
                { number: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 cursor-pointer`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  background: index % 2 === 0 ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05))' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.05))'
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-5xl group-hover:animate-bounce flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-2xl font-bold ${
                      item.color === 'primary' ? 'text-purple-400' : 
                      item.color === 'secondary' ? 'text-blue-400' : 'text-emerald-400'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white/60 ml-auto transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    
    </div>
  )
}