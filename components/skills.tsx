"use client"

import { Brain, Code, Database, GitBranch, Layout, Server, PenToolIcon as Tool } from "lucide-react"
import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming")

  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C"],
      icon: Code,
    },
    {
      id: "frontend",
      title: "Frontend",
      skills: ["React.js", "Next.js", "TailwindCSS", "HTML/CSS", "Redux"],
      icon: Layout,
    },
    {
      id: "backend",
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT"],
      icon: Server,
    },
    {
      id: "databases",
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Redis", "Firebase","UpStash"],
      icon: Database,
    },
    {
      id: "ml",
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Generative AI", "Scikit-learn","Keras"],
      icon: Brain,
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD"],
      icon: Tool,
    },
    {
      id: "other",
      title: "Other",
      skills: ["API Development", "Computer Vision", "NLP", "Web Scraping", "Data Analysis","Exploring New AI Tools"],
      icon: GitBranch,
    },
  ]

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || []

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-secondary text-white/70 hover:bg-secondary/80"
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">
                {category.id === "programming"
                  ? "Lang"
                  : category.id === "frontend"
                    ? "Front"
                    : category.id === "backend"
                      ? "Back"
                      : category.id === "databases"
                        ? "DB"
                        : category.id === "ml"
                          ? "AI/ML"
                          : category.id === "tools"
                            ? "Tools"
                            : "Other"}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {activeSkills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-card rounded-lg text-sm md:text-base font-medium transition-all hover:bg-secondary"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

