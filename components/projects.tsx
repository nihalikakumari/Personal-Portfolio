"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter } from "lucide-react"

// Updated project data with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Virtual Mouse",
    shortDescription: "Seamless hand gesture control for an AI-powered virtual mouse",
    longDescription:
      "An innovative virtual mouse powered by AI and hand gesture recognition, designed to replace traditional input devices. Utilizing OpenCV and MediaPipe for real-time hand tracking, it enables actions like clicks and cursor movement through intuitive gestures and features like screenshot. Advanced smoothing techniques ensure precision and a seamless user experience.",
    image: "public/Virtualmouse.png",
    tags: ["HTML", "CSS", "Python", "OpenCV", "Figma", "MediaPipe"],
    category: "AI/ML",
    github: "https://github.com/nihalikakumari/Virtual-mouse",
    demo: "#",
  },
  {
    id: 2,
    title: "OncoScan",
    shortDescription: "BreastAware: Early Detection Platform",
    longDescription:
      "This project is a self-assessment test app for early detection of cancer. It uses the Breast Cancer Dataset and Scikit-learn's Gaussian Naive Bayes algorithm to classify cancer cells. The app stores disease details locally and leverages machine learning to provide accurate predictions, aiding in early diagnosis.",
    image: "public\OncoScan.png",
    tags: ["HTML", "Python", "Scikit-learn", "CSS", "JavaScript", "Figma"],
    category: "AI/ML",
    github: "#",
    demo: "https://cancercellclassifier.streamlit.app/",
  },
  {
    id: 3,
    title: "Spice Delight",
    shortDescription: "Delivering authentic Indian flavors with ease and style",
    longDescription:
      "Spice Delight is a responsive Indian food delivery app built with Next.js and TypeScript. It features smooth animations, category filtering, detailed dish info, and a persistent shopping cart. With light/dark theme support and a streamlined checkout process, the app delivers a polished and accessible user experience across all devices using Tailwind CSS and Radix UI components.",
    image: "public\SpiceDelight.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI", "React Context API"],
    category: "Full Stack",
    github: "https://github.com/nihalikakumari/SpiceDelight",
    demo: "https://spice-delight-five.vercel.app/",
  },
  {
    id: 4,
    title: "Webhook Delivery Service",
    shortDescription: "A robust webhook delivery service built with FastAPI and React",
    longDescription:
      "A reliable webhook delivery service with subscription management, async delivery using Celery, retry with backoff, logging, caching via Redis, and status APIs. Built with FastAPI, PostgreSQL, Docker, and deployed on Render. Features reliable delivery, retries, and comprehensive logging for enterprise-grade webhook management.",
    image: "/placeholder.svg?height=300&width=500&query=webhook delivery service dashboard",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React 18", "TypeScript", "TanStack Router", "Tailwind CSS"],
    category: "Backend",
    github: "https://github.com/nihalikakumari/WebHook--delivery-service",
    demo: "https://trademark-search-application-three.vercel.app/",
  },
  {
    id: 5,
    title: "Trademarkia Search",
    shortDescription: "A Next.js application that replicates the Trademarkia search functionality",
    longDescription:
      "Trademarkia Search is a Next.js app for searching and filtering U.S. trademark records with real-time results and a modern UI. The application allows users to search and filter trademark records across the United States with an intuitive interface and comprehensive search capabilities.",
    image: "/placeholder.svg?height=300&width=500&query=trademark search application interface",
    tags: ["Next.js 13", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Hooks", "SWR", "Lucide React"],
    category: "Frontend",
    github: "https://github.com/nihalikakumari/TradeMarkia",
    demo: "https://trademark-search-application-2ibikd7bq.vercel.app/",
  },
  {
    id: 6,
    title: "AI Chatbot",
    shortDescription: "An intelligent AI-powered chatbot with modern web interface",
    longDescription:
      "A sophisticated AI chatbot built with modern web technologies, featuring natural language processing capabilities, responsive design, and intuitive user interactions. The chatbot provides intelligent responses and maintains conversation context for enhanced user experience.",
    image: "/placeholder.svg?height=300&width=500&query=AI chatbot interface conversation",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/nihalikakumari/ai-chatbot",
    demo: "https://bioseed-ai-chatbot.vercel.app/",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})

  const filteredProjects =
    filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter)

  const categories = ["All", "Frontend", "Backend", "Full Stack", "AI/ML"]

  const toggleDescription = (projectId: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
    <section id="projects" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 md:mb-12 gap-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden border-[#3EADCF] text-white hover:bg-[#3EADCF]/10"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter Projects
          </Button>

          <div className={flex flex-wrap gap-2 md:gap-4 justify-center ${showFilters ? "block" : "hidden sm:flex"}}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white border-none"
                    : "text-black dark:text-white border-[#3EADCF] hover:bg-[#3EADCF]/10"
                }
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-[#111827] dark:bg-white border-none overflow-hidden h-full flex flex-col group shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Project Image */}
                  <div className="overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardHeader className="flex-grow">
                    {/* Project Title and Category */}
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg md:text-xl text-white dark:text-[#0f172a] line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-[#3EADCF]/10 text-[#57D9FF] dark:text-[#0284c7] border-[#3EADCF] text-xs ml-2 flex-shrink-0"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Short Description */}
                    <CardDescription className="text-[#D1D5DB] dark:text-[#475569] text-sm md:text-base mb-3">
                      {project.shortDescription}
                    </CardDescription>

                    {/* Long Description (Expandable) */}
                    <div className="mb-4">
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedProjects[project.id] ? "auto" : 0,
                          opacity: expandedProjects[project.id] ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#D1D5DB] dark:text-[#475569] text-sm leading-relaxed mb-2">
                          {project.longDescription}
                        </p>
                      </motion.div>
                      <button
                        onClick={() => toggleDescription(project.id)}
                        className="text-[#57D9FF] dark:text-[#0284c7] text-sm hover:underline transition-colors"
                      >
                        {expandedProjects[project.id] ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  </CardHeader>

                  {/* Tech Stack */}
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-black/30 dark:bg-white/30 text-[#D1D5DB] dark:text-gray-600 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Action Buttons */}
                  <CardFooter className="flex justify-between gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#3EADCF] text-[#57D9FF] hover:bg-[#3EADCF]/10 flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                      disabled={project.github === "#"}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                      disabled={project.demo === "#"}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
