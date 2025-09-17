import React, { useState, useEffect, useRef } from 'react'

export default function Services() {
  const [activeTab, setActiveTab] = useState('features')
  const sectionRef = useRef(null)

  // Tailwind class map
  const colorMap = {
    primary: {
      text: "text-primary",
      border: "border-primary",
      bg: "bg-primary/10"
    },
    secondary: {
      text: "text-secondary",
      border: "border-secondary",
      bg: "bg-secondary/10"
    },
    accent: {
      text: "text-accent",
      border: "border-accent",
      bg: "bg-accent/10"
    }
  }

  const features = [
    {
      icon: "🎯",
      title: "Smart Matching",
      description: "AI-powered algorithm matches talents with perfect projects based on skills, experience, and preferences.",
      color: "primary"
    },
    {
      icon: "💰",
      title: "Secure Payments",
      description: "End-to-end encrypted payment system with escrow protection for both clients and freelancers.",
      color: "secondary"
    },
    {
      icon: "📊",
      title: "Project Management",
      description: "Built-in tools for project tracking, milestone management, and seamless collaboration.",
      color: "accent"
    },
    {
      icon: "🏆",
      title: "Quality Assurance",
      description: "Comprehensive review system and quality checks to ensure exceptional project delivery.",
      color: "primary"
    },
    {
      icon: "🔒",
      title: "Privacy Protection",
      description: "Advanced security measures to protect your data, communications, and intellectual property.",
      color: "secondary"
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Full-featured mobile app for iOS and Android to manage projects on the go.",
      color: "accent"
    }
  ]

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Full-stack web development, responsive design, e-commerce solutions, and web applications.",
      projects: "2,500+",
      color: "primary"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native iOS/Android apps, cross-platform solutions, and mobile UI/UX design.",
      projects: "1,800+",
      color: "secondary"
    },
    {
      icon: "🎨",
      title: "Design & Creative",
      description: "Logo design, branding, UI/UX design, graphic design, and digital marketing materials.",
      projects: "3,200+",
      color: "accent"
    },
    {
      icon: "📝",
      title: "Content Writing",
      description: "Blog posts, copywriting, technical documentation, SEO content, and social media content.",
      projects: "2,100+",
      color: "primary"
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "SEO, social media marketing, PPC campaigns, email marketing, and analytics.",
      projects: "1,900+",
      color: "secondary"
    },
    {
      icon: "⚙️",
      title: "Technical Support",
      description: "IT support, system administration, database management, and technical consulting.",
      projects: "1,400+",
      color: "accent"
    }
  ]

useEffect(() => {
  const cards = document.querySelectorAll(".feature-card")
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in")
    }, index * 150)
  })
}, [activeTab])



  const currentData = activeTab === 'features' ? features : services

  return (
    <div ref={sectionRef} className="py-20 bg-base-100">
      <div className="container mx-auto px-6 ">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-4">
            Why Choose <span className="text-primary">TalentTrade</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Discover powerful features and comprehensive services that make freelancing 
            easier, safer, and more profitable for everyone.
          </p>
          
          {/* Tab Switcher */}
          <div className="flex justify-center mt-8">
            <div className="tabs tabs-boxed bg-base-200">
              <button 
                className={`tab tab-lg ${activeTab === 'features' ? 'tab-active text-primary-content bg-primary' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                <span className="mr-2">🚀</span>
                Features
              </button>
              <button 
                className={`tab tab-lg ${activeTab === 'services' ? 'tab-active text-primary-content bg-primary' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                <span className="mr-2">🛠️</span>
                Services
              </button>
            </div>
          </div>
        </div>

        {/* Features/Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentData.map((item, index) => {
            const colors = colorMap[item.color]
            return (
              <div
                key={`${activeTab}-${index}`}
                className={`feature-card group p-8 rounded-3xl bg-base-200 hover:bg-base-300 border border-base-300 hover:${colors.border} transition-all duration-500 transform  cursor-pointer opacity-0 translate-y-8`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-2xl mb-6 group-hover:animate-bounce`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${colors.text}`}>
                    {item.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Service specific - Project count */}
                  {activeTab === 'services' && item.projects && (
                    <div className="flex items-center justify-between pt-4 border-t border-base-content/10">
                      <span className="text-sm text-base-content/60">Completed Projects</span>
                      <span className={`font-bold ${colors.text} text-lg`}>{item.projects}</span>
                    </div>
                  )}
                </div>

                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-primary ml-auto transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { number: "50K+", label: "Active Freelancers", icon: "👥" },
            { number: "15K+", label: "Completed Projects", icon: "✅" },
            { number: "98%", label: "Success Rate", icon: "🎯" },
            { number: "24/7", label: "Support Available", icon: "🚀" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-base-content/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  )
}
