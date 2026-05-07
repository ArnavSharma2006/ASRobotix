"use client"

import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { ArrowRight, RotateCw, Zap } from "lucide-react"
import { VideoModal } from "@/components/video-modal"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isMicrobotFlipped, setIsMicrobotFlipped] = useState(false)

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true)
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative min-h-screen pt-24 sm:pt-32 pb-16 overflow-hidden bg-black hero-gradient">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Tiny Robots That
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Think & Collaborate
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-3xl mx-auto px-4">
              Our Atomites can roll and connect from any side, forming shapes and structures without human
              intervention. They move unpredictably, without wheels or complicated commands, relying on simple, elegant
              design and teamwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                variant="outline"
                className="gap-2 border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => window.location.href = '/waitlist'}
              >
                Join Waitlist
              </Button>
              <Button 
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 gap-2"
                onClick={scrollToProjects}
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="relative bg-black/80 p-4 sm:p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <button
                    type="button"
                    aria-label="Flip Atomites version 2.0 information card"
                    aria-pressed={isMicrobotFlipped}
                    onClick={() => setIsMicrobotFlipped((current) => !current)}
                    className="group relative w-full max-w-[560px] cursor-pointer rounded-xl text-left outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <div className="relative aspect-video rounded-xl transition duration-300 ease-out group-hover:scale-[1.015] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.28)] group-focus-visible:scale-[1.015]">
                      <div
                        className={`relative h-full w-full rounded-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] ${
                          isMicrobotFlipped ? "[transform:rotateY(180deg)]" : ""
                        }`}
                      >
                        <div className="absolute inset-0 overflow-hidden rounded-xl border border-orange-400/20 bg-white/5 shadow-xl shadow-red-500/10 [backface-visibility:hidden]">
                          <Image
                            src="/Microbot2.jpg"
                            alt="ASRobotix Atomites in Formation"
                            width={640}
                            height={360}
                            priority
                            className="h-full w-full rounded-xl object-cover brightness-105 contrast-105 saturate-110 transition duration-300 group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15 transition group-hover:ring-orange-300/45" />
                          <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                            <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                              Atomites v2.0
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/20 text-orange-100 backdrop-blur transition group-hover:bg-orange-500/30">
                              <RotateCw className="h-4 w-4" />
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-lg font-semibold text-white drop-shadow">Microbot2 Prototype</p>
                            <p className="mt-1 text-sm text-orange-100/90 drop-shadow">
                              Modular movement system built for self-forming robotic structures.
                            </p>
                          </div>
                        </div>

                        <div className="absolute inset-0 rounded-xl border border-orange-300/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950/80 p-4 shadow-xl shadow-orange-500/15 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5">
                          <div className="flex h-full flex-col justify-between gap-4">
                            <div>
                              <div className="mb-3 flex items-center justify-between">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-200">
                                  <Zap className="h-4 w-4" />
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wide text-orange-200/80">
                                  Prototype Focus
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-white sm:text-2xl">Atomites, closer up</h3>
                              <p className="mt-2 text-sm leading-5 text-gray-300">
                                Microbot2 highlights compact swarm robots that connect, separate, and coordinate
                                through simple mechanical interactions.
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <p className="text-lg font-semibold text-white">360</p>
                                <p className="text-xs text-gray-400">side access</p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <p className="text-lg font-semibold text-white">Swarm</p>
                                <p className="text-xs text-gray-400">ready design</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 card-hover border-hover">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">Currently Working On</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <p className="text-sm sm:text-base">Autonomous connection & disconnection</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <p className="text-sm sm:text-base">Multi-directional movement</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <p className="text-sm sm:text-base">Swarm intelligence coordination</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 card-hover border-hover">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Innovation Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <p className="text-sm sm:text-base">Active Development & Testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShineBorder>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/promo.mp4"
      />
    </>
  )
}
