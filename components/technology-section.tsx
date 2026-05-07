"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Brain, Cpu, Network, Shield, Wrench, X, Zap } from "lucide-react"

const assemblyCycles = [
  [0, 1, 2],
  [3, 4, 5],
  [0, 3, 4, 1],
  [1, 4, 5, 2],
  [0, 1, 4, 3],
  [1, 2, 5, 4],
]

function getNextAssemblyOrder(currentOrder: number[]) {
  const cycle = assemblyCycles[Math.floor(Math.random() * assemblyCycles.length)]
  const nextOrder = [...currentOrder]
  const cycleValues = cycle.map((slotIndex) => currentOrder[slotIndex])

  cycle.forEach((slotIndex, cycleIndex) => {
    nextOrder[slotIndex] = cycleValues[(cycleIndex + cycleValues.length - 1) % cycleValues.length]
  })

  return nextOrder
}

export function TechnologySection() {
  const technologies = [
    {
      title: "Autonomous Connection",
      description: "Atomites can connect from any side without human intervention, forming complex structures",
      icon: <Network className="h-6 w-6 text-red-500" />,
      pointers: [
        "Connects from multiple sides without manual alignment",
        "Uses simple local behavior to form larger shapes",
        "Supports repeated connect and disconnect cycles during testing",
      ],
    },
    {
      title: "Swarm Intelligence",
      description: "Advanced coordination algorithms enable collective problem-solving and decision-making",
      icon: <Brain className="h-6 w-6 text-orange-500" />,
      pointers: [
        "Lets each robot react to nearby modules instead of one central command",
        "Coordinates group movement through shared state and local sensing",
        "Designed for scalable behavior as more Atomites join the swarm",
      ],
    },
    {
      title: "Unpredictable Movement",
      description: "Elegant design allows movement without wheels or complex commands, adapting to any terrain",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      pointers: [
        "Moves without relying on traditional wheel-based drive",
        "Creates useful motion from compact mechanical interactions",
        "Helps the swarm explore and reposition in constrained spaces",
      ],
    },
    {
      title: "Miniaturized Computing",
      description: "Powerful processing capabilities packed into eraser-sized robots for maximum efficiency",
      icon: <Cpu className="h-6 w-6 text-red-500" />,
      pointers: [
        "Keeps sensing, control, and coordination inside a compact footprint",
        "Balances compute needs with battery and weight limits",
        "Enables each Atomite to act as an independent robotic unit",
      ],
    },
    {
      title: "Defense Applications",
      description: "Autonomous scouting capabilities for military and security reconnaissance missions",
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      pointers: [
        "Supports scouting concepts for tight, risky, or low-visibility areas",
        "Reduces the need to send people into uncertain spaces first",
        "Built around small-module redundancy instead of one fragile platform",
      ],
    },
    {
      title: "Construction Aid",
      description: "Self-assembling systems for building structures in hard-to-reach or dangerous locations",
      icon: <Wrench className="h-6 w-6 text-yellow-500" />,
      pointers: [
        "Explores modular assembly in spaces that are difficult to access",
        "Can form temporary structures from many small connected units",
        "Targets future repair, inspection, and support tasks in the field",
      ],
    },
  ]
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState<number | null>(null)
  const [technologyOrder, setTechnologyOrder] = useState(() => technologies.map((_, index) => index))
  const [hasTechnologyBeenSelected, setHasTechnologyBeenSelected] = useState(false)
  const [canAnimateAssembly, setCanAnimateAssembly] = useState(false)
  const technologyOrderRef = useRef(technologyOrder)
  const technologyCardRefs = useRef<Record<number, HTMLButtonElement | null>>({})
  const previousTechnologyRectsRef = useRef<Map<number, DOMRect> | null>(null)
  const selectedTechnology = selectedTechnologyIndex !== null ? technologies[selectedTechnologyIndex] : null
  const selectedTechnologySlot =
    selectedTechnologyIndex !== null ? technologyOrder.indexOf(selectedTechnologyIndex) : -1
  const selectedColumn = selectedTechnologySlot !== -1 ? selectedTechnologySlot % 3 : -1
  const selectedRow = selectedTechnologySlot !== -1 ? Math.floor(selectedTechnologySlot / 3) : -1
  const isAssemblyActive = canAnimateAssembly && !hasTechnologyBeenSelected && selectedTechnologyIndex === null
  const panelPositionClass =
    selectedColumn === 0
      ? "lg:left-[66.666%] lg:top-1/2"
      : selectedColumn === 2
        ? "lg:left-[33.333%] lg:top-1/2"
        : selectedRow === 0
          ? "lg:left-1/2 lg:top-[86%]"
          : "lg:left-1/2 lg:top-[14%]"

  useEffect(() => {
    technologyOrderRef.current = technologyOrder
  }, [technologyOrder])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setCanAnimateAssembly(!mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener("change", updateMotionPreference)

    return () => mediaQuery.removeEventListener("change", updateMotionPreference)
  }, [])

  useEffect(() => {
    if (!isAssemblyActive) {
      return
    }

    const captureTechnologyRects = () => {
      const rects = new Map<number, DOMRect>()

      technologyOrderRef.current.forEach((technologyIndex) => {
        const element = technologyCardRefs.current[technologyIndex]

        if (element) {
          rects.set(technologyIndex, element.getBoundingClientRect())
        }
      })

      previousTechnologyRectsRef.current = rects

      return rects
    }

    const shuffleTechnologies = () => {
      captureTechnologyRects()
      setTechnologyOrder((currentOrder) => getNextAssemblyOrder(currentOrder))
    }

    const firstShuffle = window.setTimeout(shuffleTechnologies, 900)
    const shuffleInterval = window.setInterval(shuffleTechnologies, 2600)

    return () => {
      window.clearTimeout(firstShuffle)
      window.clearInterval(shuffleInterval)
    }
  }, [isAssemblyActive])

  useLayoutEffect(() => {
    const previousRects = previousTechnologyRectsRef.current

    if (!previousRects || !isAssemblyActive) {
      return
    }

    previousTechnologyRectsRef.current = null
    const cleanupTimers: number[] = []

    technologyOrder.forEach((technologyIndex, slotIndex) => {
      const element = technologyCardRefs.current[technologyIndex]
      const previousRect = previousRects.get(technologyIndex)

      if (!element || !previousRect) {
        return
      }

      const currentRect = element.getBoundingClientRect()
      const deltaX = previousRect.left - currentRect.left
      const deltaY = previousRect.top - currentRect.top

      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) {
        return
      }

      const rotation = ((slotIndex % 3) - 1) * 1.4

      element.style.transition = "transform 0s"
      element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.98) rotate(${rotation}deg)`
      element.style.zIndex = "20"

      window.requestAnimationFrame(() => {
        element.style.transition = "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)"
        element.style.transform = ""
      })

      cleanupTimers.push(
        window.setTimeout(() => {
          element.style.transition = ""
          element.style.zIndex = ""
        }, 950),
      )
    })

    return () => cleanupTimers.forEach((timer) => window.clearTimeout(timer))
  }, [technologyOrder, isAssemblyActive])

  useEffect(() => {
    if (!hasTechnologyBeenSelected) {
      return
    }

    previousTechnologyRectsRef.current = null
    Object.values(technologyCardRefs.current).forEach((element) => {
      if (element) {
        element.style.transition = ""
        element.style.transform = ""
        element.style.zIndex = ""
      }
    })
  }, [hasTechnologyBeenSelected])

  return (
    <section id="technology" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Revolutionary Technology
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Our breakthrough approach combines miniaturization, artificial intelligence, and swarm robotics to create
          machines that think and collaborate like never before.
        </p>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {technologyOrder.map((technologyIndex, slotIndex) => {
              const tech = technologies[technologyIndex]

              return (
                <button
                  key={tech.title}
                  ref={(element) => {
                    technologyCardRefs.current[technologyIndex] = element
                  }}
                  type="button"
                  aria-pressed={selectedTechnology?.title === tech.title}
                  onClick={() => {
                    setHasTechnologyBeenSelected(true)
                    setSelectedTechnologyIndex(technologyIndex)
                  }}
                  style={isAssemblyActive ? { animationDelay: `${slotIndex * 120}ms` } : undefined}
                  className={`neumorphism group relative overflow-hidden rounded-xl p-6 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    isAssemblyActive ? "tech-assembly-card" : ""
                  } ${
                    selectedTechnology && selectedTechnology.title !== tech.title
                      ? "z-0 scale-[0.98] blur-[2px] grayscale opacity-35"
                      : "z-10"
                  } ${
                    selectedTechnology?.title === tech.title
                      ? "z-30 scale-[1.02] grayscale shadow-[0_0_35px_rgba(255,255,255,0.38)] ring-1 ring-white/70"
                      : "hover:scale-[1.015]"
                  }`}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4 p-4 rounded-full neumorphism-inset">{tech.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{tech.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {selectedTechnology && (
            <div
              className={`tech-focus-panel absolute left-1/2 top-1/2 z-20 w-[min(92%,520px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/20 bg-black/85 p-5 shadow-[0_0_45px_rgba(255,255,255,0.2)] backdrop-blur-md sm:p-6 ${panelPositionClass}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-white/60">Technology Focus</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedTechnology.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{selectedTechnology.description}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close technology details"
                  onClick={() => setSelectedTechnologyIndex(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-5 space-y-3">
                {selectedTechnology.pointers.map((pointer) => (
                  <div key={pointer} className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
                    <p className="text-sm leading-6 text-gray-200">{pointer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
