"use client"

import { useState } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  runnable: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Formula DB",
    description:
      "A Formula 1 data visualization tool built with Python. This project allows users to analyze and compare driver/race data in real-time, providing insights into race performance and statistics.",
    technologies: ["Python", "Pandas", "Matplotlib", "API Integration"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/Radikahn/FormulaDB",
    runnable: true,
  },
  {
    id: 2,
    title: "RadTPA",
    description:
      "A Minecraft server plugin that enables player teleportation with permission-based access control. Built using Java, it enhances server management and player experience.",
    technologies: ["Java", "Bukkit API", "Permissions System"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/Radikahn/RadTPA",
    runnable: false,
  },
  {
    id: 3,
    title: "RadiX Review",
    description:
      "A modern web application for reviewing and rating various media content. Built with Next.js and TypeScript, featuring a clean UI and comprehensive rating system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/Radikahn/RadiXReview",
    liveUrl: "https://radix-review.vercel.app",
    runnable: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "My personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. Features responsive design, smooth animations, and modern web development practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/Radikahn/portfolio",
    liveUrl: "https://radikahn.com",
    runnable: false,
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [runResult, setRunResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [inputData, setInputData] = useState({
    year: "",
    raceNumber: "",
    raceType: "",
    driver: "",
  })

  const runProject = async (projectId: number) => {
    setIsLoading(true)
    setError(null)
    setRunResult(null)

    try {
      const response = await fetch("http://localhost:8000/run_project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project_id: projectId,
          input_data: `${inputData.year},${inputData.raceNumber},${inputData.raceType},${inputData.driver}`,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setRunResult(data.result)
      }
    } catch (err) {
      setError("An error occurred while running the project.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0c090d] text-[#d9d9d9] pb-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-[#dcc7be] mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass p-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description.substring(0, 100)}...</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-[#dcc7be] text-[#0c090d] px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#0c090d] p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#dcc7be]">
            <h2 className="text-3xl font-bold mb-4 text-[#dcc7be]">{selectedProject.title}</h2>
            <Image
              src={selectedProject.imageUrl || "/placeholder.svg"}
              alt={selectedProject.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <p className="mb-4 text-[#d9d9d9]">{selectedProject.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-[#dcc7be]">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-[#dcc7be] text-[#0c090d] px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#dcc7be] text-[#0c090d] px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
              >
                View on GitHub
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#dcc7be] text-[#0c090d] px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                >
                  View Live Demo
                </a>
              )}
              {selectedProject.runnable && (
                <button
                  onClick={() => runProject(selectedProject.id)}
                  className="bg-[#dcc7be] text-[#0c090d] px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Running..." : "Run Project"}
                </button>
              )}
            </div>
            {selectedProject.runnable && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#dcc7be]">Input Data:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Year"
                    value={inputData.year}
                    onChange={(e) => setInputData({ ...inputData, year: e.target.value })}
                    className="bg-[#1c1c1c] text-[#d9d9d9] px-3 py-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Race Number"
                    value={inputData.raceNumber}
                    onChange={(e) => setInputData({ ...inputData, raceNumber: e.target.value })}
                    className="bg-[#1c1c1c] text-[#d9d9d9] px-3 py-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Race Type (e.g., FP1, Q1, R)"
                    value={inputData.raceType}
                    onChange={(e) => setInputData({ ...inputData, raceType: e.target.value })}
                    className="bg-[#1c1c1c] text-[#d9d9d9] px-3 py-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Driver (e.g., HAM)"
                    value={inputData.driver}
                    onChange={(e) => setInputData({ ...inputData, driver: e.target.value })}
                    className="bg-[#1c1c1c] text-[#d9d9d9] px-3 py-2 rounded"
                  />
                </div>
              </div>
            )}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {runResult && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#dcc7be]">Result:</h3>
                {runResult.startsWith("data:image/png;base64,") ? (
                  <img src={runResult || "/placeholder.svg"} alt="Formula DB Result" className="w-full rounded" />
                ) : (
                  <pre className="bg-[#1c1c1c] p-4 rounded overflow-x-auto text-[#d9d9d9]">{runResult}</pre>
                )}
              </div>
            )}
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 text-[#dcc7be] hover:text-[#d9d9d9] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

