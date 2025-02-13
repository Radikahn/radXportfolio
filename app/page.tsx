"use client"

import Link from "next/link"
import { TypingAnimation } from "@/components/typing-animation"

export default function Page() {
  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4">
        <section className="mb-20 pt-16 text-center">
          <TypingAnimation text="Hello, I'm Radman!" />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d9d9d9] mb-6">Minecraft Servers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6">
              <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">Vanilla Survival</h3>
              <p className="text-[#d9d9d9] mb-4">
                Experience pure Minecraft gameplay on our Vanilla Survival server. Build, explore, and survive in a
                pristine world with a friendly community.
              </p>
              <a href="/mc-servers" className="text-[#dcc7be] hover:underline">
                Join Vanilla Server
              </a>
            </div>
            <div className="glass p-6">
              <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">Modded Adventure</h3>
              <p className="text-[#d9d9d9] mb-4">
                Dive into an enhanced Minecraft experience with our Modded Adventure server. Discover new items, biomes,
                and challenges in a carefully curated modpack.
              </p>
              <a href="/mc-servers" className="text-[#dcc7be] hover:underline">
                Join Modded Server
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Link href="/projects" className="inline-block">
            <h2 className="text-3xl font-bold text-[#d9d9d9] mb-6 hover:text-[#dcc7be] transition-colors">Projects</h2>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6">
              <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">Formula DB</h3>
              <p className="text-[#d9d9d9] mb-4">
                A Formula 1 data visualization tool built with Python. This project allows users to analyze and compare
                driver/race data in real-time, providing insights into race performance and statistics.
              </p>
              <a
                href="https://github.com/Radikahn/FormulaDB"
                className="text-[#dcc7be] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="glass p-6">
              <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">RadTPA</h3>
              <p className="text-[#d9d9d9] mb-4">
                A Minecraft server plugin that enables player teleportation with permission-based access control. Built
                using Java, it enhances server management and player experience.
              </p>
              <a
                href="https://github.com/Radikahn/RadTPA"
                className="text-[#dcc7be] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="glass p-6">
              <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">RadiX Review</h3>
              <p className="text-[#d9d9d9] mb-4">
                A modern web application for reviewing and rating various media content. Built with Next.js and
                TypeScript, featuring a clean UI and comprehensive rating system.
              </p>
              <a
                href="https://github.com/Radikahn/RadiXReview"
                className="text-[#dcc7be] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="glass p-6">
              <h3 className="text-xl font-bold text-[#d9d9d9] mb-2">Portfolio Website</h3>
              <p className="text-[#d9d9d9] mb-4">
                My personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. Features responsive
                design, smooth animations, and modern web development practices.
              </p>
              <a
                href="https://github.com/Radikahn/portfolio"
                className="text-[#dcc7be] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d9d9d9] mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Python", "Java", "Docker", "C / C++", "AWS", "Linux"].map((skill) => (
              <div key={skill} className="glass skill-button p-4 text-center cursor-pointer">
                <span className="text-[#d9d9d9]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#d9d9d9] mb-6">Contact</h2>
          <p className="text-[#d9d9d9] mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through the following
            channels:
          </p>
          <ul className="text-[#d9d9d9] list-disc list-inside">
            <li>
              <a
                href="https://www.linkedin.com/in/radman-shahbazkhan-3799302b2/"
                className="text-[#d9d9d9] hover:text-[#dcc7be] transition-colors"
              >
                LinkedIn: Radman Shahbazkhan
              </a>
            </li>
            <li>
              <a href="https://github.com/Radikahn" className="text-[#d9d9d9] hover:text-[#dcc7be] transition-colors">
                GitHub: Radikahn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/radikahn/"
                className="text-[#d9d9d9] hover:text-[#dcc7be] transition-colors"
              >
                Instagram: @radikahn
              </a>
            </li>
            <li>Email: radi@radikahn.com</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

