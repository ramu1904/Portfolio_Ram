"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const projects = [
    {
      title: "Youtube Video Translator Pro",
      description: "A powerful Python application that transforms YouTube videos into multiple Indian languages while maintaining perfect audio-video synchronization. This tool transcribes the original audio, translates the content, and generates synchronized dubbed audio in your target language.",
      techStack: ["streamlit","whisper","deep-translator","gtts","pydub","yt-dlp","imageio-ffmpeg"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/youtube-video-translator",
      demo: "https://pulsefit-ai.vercel.app",
    },
    {
      title: "AIStreamX LMS Platform - Working",
      description: "Industrial-level LMS with real-time chat, video courses with both Live Classes and Recorded Classes, Reviews, Subscription based content, Doubt Sections and AI-powered analytics.",
      techStack: ["TypeScript", "Node.js", "Next.js", "Redis", "MongoDB","Stripe","JWT","UpStash"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/aistreamx-lms",
      demo: "https://aistreamx-lms.vercel.app",
    },
    {
      title: "Virtual Eye-Gazing Keyboard System",
      description: "The Eye Controlling Keyboard is an innovative project that allows users to control a virtual keyboard using only their eye movements. Developed entirely in Python with OpenCV, this application provides a hands-free way to type by leveraging real-time eye tracking and blink detection.",
      techStack: ["Python","Open CV"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/Eye_Controlled_Keyboard_",
      demo: "https://eyegazingkeyboard.app",
    },
    {
      title: "TypeMaster - Advanced Typing Test",
      description: "TypeMaster is a fully responsive, dynamic typing test application designed to improve your typing skills by measuring speed (WPM) and accuracy while typing. Built with HTML, CSS, and JavaScript, the app features multiple timer options, error detection, word-wise tracking, and an automatic restart in case of inactivity.",
      techStack: ["HTML","CSS","JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/TypeMaster-AdvancedTypingSpeed",
      demo: "https://typemaster.app",
    },
    {
      title: "Medicare - Appointment Booking System",
      description: "This is the WebTechnology Project implemented in 3rd semester of my college, here we can Book the Appointments by checking their schedules for their availability, can manage our profiles,Login SIgnUp secure authentication system ",
      techStack: ["React","Tailwind CSS","NodeJs","JWT","MongoDB"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/Medicare_01project_webtechnology",
      demo: "https://medicare.vercel.app",
    },
    {
      title: "Movie Searching App",
      description: "This Movie Searching website developed by using the API to fetch the details of Movies in the world with some of the summary of the movie with the Movie ratings out of 5",
      techStack: ["HTML","CSS","JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/Movie-Searching-App-",
      demo: "https://distributed-task-manager.vercel.app",
    },
    {
      title: "Block D Block Game",
      description: "Implementing the Block the Block ( Block Puzzle ) game it is one of the famous game in the old genration mobile phones in my childhood days . it is implemented using HTML CSS and JavaScript",
      techStack: ["HTML","CSS","JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/ramu1904/Block-the-Block-Game-",
      demo: "https://distributed-task-manager.vercel.app",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, projects.length])

  const nextProject = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="py-24">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 transition-all duration-300">
            <div className="relative h-48 sm:h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">{activeProject.title}</h3>
            <p className="text-muted-foreground mb-6">{activeProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-secondary/60 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation controls in the style shown in the reference image */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4 bg-black px-6 py-2 rounded-full">
              <button
                onClick={prevProject}
                className="text-white hover:text-primary transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <span className="text-white text-sm font-medium">
                {activeIndex + 1} / {projects.length}
              </span>

              <button
                onClick={nextProject}
                className="text-white hover:text-primary transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

