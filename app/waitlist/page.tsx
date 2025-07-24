"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShineBorder } from "@/components/ui/shine-border"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { CheckCircle, Users, Zap, Clock, ArrowRight, Mail, Phone, Building } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    interest: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset form after showing success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            role: "",
            interest: "",
            message: ""
          })
          setIsSubmitted(false)
        }, 5000)
      } else {
        // Handle error
        alert(`Error: ${result.message}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Early Access",
      description: "Be among the first to experience our breakthrough Atomite technology"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Exclusive Updates",
      description: "Get insider information about development progress and upcoming features"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Priority Support",
      description: "Direct access to our team for technical questions and collaboration"
    }
  ]

  const interestAreas = [
    "Research & Development",
    "Manufacturing & Production",
    "Education & Academia",
    "Healthcare & Medical",
    "Agriculture & Farming",
    "Construction & Infrastructure",
    "Entertainment & Events",
    "Other"
  ]

  return (
    <main className="min-h-screen bg-black">
      <SmoothScroll />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden bg-black hero-gradient">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Join the
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Future of Robotics
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
              Be part of the revolution in collaborative robotics. Join our exclusive waitlist to get early access to 
              Atomite technology and shape the future of autonomous systems.
            </p>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Join Our Waitlist</h2>
              <p className="text-gray-400 mb-8">
                Tell us about yourself and your interest in our technology. We'll keep you updated on our progress 
                and reach out when we're ready to collaborate.
              </p>

              {isSubmitted ? (
                <div className="text-center border border-green-500/20 rounded-xl">
                  <div className="p-8">
                    <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-gray-400">
                      You've been added to our waitlist. We'll be in touch soon with updates about our Atomite technology.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="border border-white/10 rounded-xl">
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-red-500 rounded-lg"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-red-500 rounded-lg"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="optional-info">
                        <AccordionTrigger className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-left text-white font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                          Provide optional info
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <Input
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-red-500 rounded-lg"
                                  placeholder="+1 (555) 123-4567"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">Company</label>
                                <Input
                                  name="company"
                                  value={formData.company}
                                  onChange={handleInputChange}
                                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-red-500 rounded-lg"
                                  placeholder="Your company name"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Role</label>
                              <Input
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-red-500 rounded-lg"
                                placeholder="e.g., Engineer, Manager, Researcher"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Primary Interest Area</label>
                              <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 focus:border-red-500 focus:outline-none"
                              >
                                <option value="">Select an area of interest</option>
                                {interestAreas.map((area, index) => (
                                  <option key={index} value={area}>{area}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Message </label>
                              <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-red-500 rounded-lg"
                                placeholder="Tell us more about your interest in our technology or any specific use cases you have in mind..."
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 gap-2 rounded-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Join Our Waitlist?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">
                        Get exclusive access to our Atomite technology before public release
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">
                        Receive detailed technical specifications and use case documentation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">
                        Participate in beta testing and provide feedback to shape the product
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">
                        Priority access to partnership opportunities and custom solutions
                      </p>
                    </div>
                  </div>
                </div>
              </ShineBorder>

              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Current Development Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Prototype Development</span>
                      <span className="text-sm text-green-500">✓ In Progress</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Field Testing</span>
                      <span className="text-sm text-yellow-500">Soon</span>
                    </div>
                  </div>
                </div>
              </ShineBorder>

              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Join hundreds of innovators who are already on our waitlist, ready to revolutionize their industries 
                  with Atomite technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 