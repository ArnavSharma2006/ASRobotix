"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShineBorder } from "@/components/ui/shine-border"
import { ArrowLeft, Users, Target, Lightbulb, Award, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})
  const institutions = [
    { 
      name: "IIT Delhi", 
      logo: "/uni-logo/indian-institute-of-technology-delhi-logo-freelogovectors.net_.png", 
      description: "Indian Institute of Technology Delhi" 
    },
    {
      name: "IIT Roorkee",
      logo: "/uni-logo/iit-roorkee.png",
      description: "Indian Institute of Technology Roorkee",
    },
    { 
      name: "IIT Guwahati", 
      logo: "/uni-logo/IIT-Guwahati_1.png", 
      description: "Indian Institute of Technology Guwahati" 
    },
    { 
      name: "IIT Madras", 
      logo: "/uni-logo/IITM_logo_center.png", 
      description: "Indian Institute of Technology Madras" 
    },
    { 
      name: "DTU", 
      logo: "/uni-logo/delhi-technological-university-logo.png", 
      description: "Delhi Technological University" 
    },
    {
      name: "BITS Pilani",
      logo: "/uni-logo/bits pilani.png",
      description: "Birla Institute of Technology and Science, Pilani",
    },
    { 
      name: "UC Davis", 
      logo: "/uni-logo/ucd.png", 
      description: "University of California, Davis" 
    },
  ]

  const teamMembers = [
    {
      name: "Arnav Sharma",
      role: "Founder",
      image: "/team-members/Arnav Sharma.jpg",
      bio: "Robotics enthusiast leading ASRobotix with a vision to revolutionize disaster response.",
      linkedin: "https://linkedin.com/in/arnavsharma-asrobotix"
    },
    {
      name: "Saksham Kamboj",
      role: "Co-Founder",
      image: "/team-members/Saksham Kamboj.jpg",
      bio: "Co-founder driving the technical vision and development of cutting-edge robotics solutions at ASRobotix.",
      linkedin: "https://linkedin.com/in/saksham-kamboj"
    },
    {
      name: "Ishaan Kesarwani",
      role: "Developer",
      image: "/team-members/Ishaan kesarwani.png",
      bio: "Full-stack developer specializing in robotics software and AI integration for autonomous systems.",
      linkedin: "https://linkedin.com/in/ishaan-kesarwani"
    },
    {
      name: "Taanish Gupta",
      role: "Embedded Systems & Logic Control Engineer",
      image: "/team-members/Taanish Gupta.jpg",
      bio: "Expert in embedded systems and control logic, ensuring our robots operate with precision and reliability.",
      linkedin: "https://linkedin.com/in/taanish-gupta"
    },
    {
      name: "Ridhi Sehgal",
      role: "UI/UX & Graphic Designer",
      image: "/team-members/Ridhi Sehgal.jpg",
      bio: "Creative designer crafting intuitive user experiences and stunning visuals for our robotics platform.",
      linkedin: "https://linkedin.com/in/ridhi-sehgal"
    },
    {
      name: "Tanishka Gupta",
      role: "Electronic Systems Developer",
      image: "/team-members/Tanishka Gupta.png",
      bio: "Electronic systems specialist designing and implementing the hardware backbone of our robotic solutions.",
      linkedin: "https://linkedin.com/in/tanishka-gupta"
    },
    {
      name: "Kartikay Lakhotia",
      role: "Product development engineer",
      image: "/team-members/Kartikay Lakhotia.png",
      bio: "Product engineer focused on bringing innovative robotics concepts from prototype to production.",
      linkedin: "https://linkedin.com/in/kartikay-lakhotia "
    },
    {
      name: "Soham Jain",
      role: "Mechanical Systems and Scalability Engineer",
      image: "/team-members/Soham Jain.jpg",
      bio: "Mechanical engineer designing scalable robotic systems for real-world applications and mass production.",
      linkedin: "https://linkedin.com/in/soham-jain"
    },
    {
      name: "Sri Lakshmi Anbarasan",
      role: "Data Systems Intern",
      image: "/team-members/Sri Lakshmi Anbarasan.jpg",
      bio: "Data systems intern working on analytics and data processing for robotics performance optimization.",
      linkedin: "https://linkedin.com/in/sri-lakshmi-anbarasan"
    },
    {
      name: "Ansh Wadhawan",
      role: "Web Developer",
      image: "/team-members/Ansh Wadhawan.jpg",
      bio: "Web developer building the digital interfaces that connect users with our robotic ecosystem.",
      linkedin: "https://linkedin.com/in/ansh-wadhawan"
    },
  ]

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-red-500" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in robotics, always seeking breakthrough solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Collaborative Spirit",
      description: "Just like our robots, we believe in the power of teamwork and collective intelligence.",
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-500" />,
      title: "Purpose Driven",
      description: "Every project we undertake aims to solve real-world problems and improve lives.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Excellence Standard",
      description: "We maintain the highest standards in research, development, and execution.",
    },
  ]

  const achievements = [
    { number: "1", label: "Patent Application Filed", description: "MechLid smart waste management system" },
    { number: "2", label: "Breakthrough Projects", description: "MechLid and Atomites in active development" },
    { number: "4", label: "Premier Institutions", description: "Team members from top global universities" },
    { number: "50+", label: "Prototypes Tested", description: "Continuous iteration and improvement" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 sm:pt-32 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold mb-5 sm:mb-6">About ASRobotix</h1>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A group of robotics enthusiasts taking on breakthrough projects and innovating for the world. Driven by a
              big dream, our small team is committed to changing how we build, explore, and heal, one Atomite at a
              time.
            </p>
          </div>
        </div>
      </section>

      {/* World-Class Team */}
      <section className="py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">World-Class Team</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm leading-6 sm:text-base">
            A lean team that consists of the brightest minds of India hailing from premier institutions worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-8 mb-12 sm:mb-16">
            {teamMembers.map((member) => {
              const isFlipped = flippedCards[member.name] || false
              return (
                <div
                  key={member.name}
                  className="neumorphism mx-auto h-60 w-full max-w-sm cursor-pointer overflow-hidden rounded-xl p-4 transition-transform duration-500 hover:scale-105 sm:h-64 sm:max-w-none"
                  style={{ perspective: '1000px' }}
                  onClick={() => setFlippedCards(prev => ({ ...prev, [member.name]: !prev[member.name] }))}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500`}
                    style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', height: '100%' }}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-1">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-base font-semibold mb-1 truncate">{member.name}</h3>
                        <p className="text-gray-400 text-xs">{member.role}</p>
                      </div>
                    </div>
                    {/* Back */}
                    <div
                      className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="text-center flex flex-col justify-center h-full overflow-auto">
                        <h3 className="text-base font-semibold mb-2 truncate">{member.name}</h3>
                        <p className="text-gray-300 text-xs mb-4 leading-relaxed max-h-28 overflow-auto">{member.bio}</p>
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Members from Top Institutes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
              {institutions.map((institution) => (
                <div key={institution.name} className="neumorphism rounded-xl p-3 text-center card-hover hover:scale-105 transition-transform sm:p-4">
                  <div className="h-14 sm:h-16 flex items-center justify-center mb-3">
                    <Image
                      src={institution.logo}
                      alt={institution.name}
                      width={138}
                      height={69}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-white">{institution.name}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-5">{institution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 px-4 sm:px-6 sm:py-16 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center sm:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {values.map((value) => (
              <div key={value.title} className="neumorphism rounded-xl p-5 sm:p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full neumorphism-inset flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
