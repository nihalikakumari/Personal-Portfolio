"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const educationData = [
  {
    id: 1,
    institution: "Vellore Institute Of Technology, Bhopal",
    location: "Bhopal, Madhya Pradesh",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    specialization: "Specializing in Cloud Computing and Automation",
    duration: "Aug 2022 - Jul 2026",
    logo: "https://e0.pxfuel.com/wallpapers/596/856/desktop-wallpaper-vit-logo-vellore-institute-of-technology-vector-indian-institute-logo.jpg",
    website: "https://vitbhopal.ac.in/",
    description: "Pursuing B.Tech in Computer Science with specialization in Cloud Computing and Automation.",
    achievements: [
      "Focus on AI/ML and software development",
      "Active member of technical clubs",
      "Participating in hackathons and coding competitions",
      "Maintaining a strong academic performance",
    ],
  },
  {
    id: 2,
    institution: "D.A.V Public School, Cantt Rd Khagaul",
    location: "Patna, Bihar",
    degree: "Higher Secondary Education",
    field: "Science (PCM)",
    duration: "June 2019 - May 2021",
    logo: "https://th.bing.com/th/id/OIP.6aG8YuS4ZQMvhZctQHI4gAHaHO?w=253&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    website: "https://davkhagaul.org",
    description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.",
    achievements: [
      "Completed with 90% aggregate",
      "Distinction in Mathematics and Computer Science",
      "Winner of DAV's Annual Cluster Science exhibitions",
      "Core Member of the school's science club",
    ],
  },
  {
    id: 3,
    institution: "D.A.V Public School, Cantt Rd Khagaul",
    location: "Patna, Bihar",
    degree: "Secondary Education (10th Grade)",
    duration: "2019",
    logo: "https://th.bing.com/th/id/OIP.6aG8YuS4ZQMvhZctQHI4gAHaHO?w=253&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    website: "https://davkhagaul.org",
    description: "Completed secondary education with strong academic performance.",
    achievements: [
      "Achieved 88% marks in board examinations",
      "Selected as prefect multiple times",
      "Developed leadership and organizational skills",
      "Active participation in extracurricular activities",
      "Improved time management and teamwork abilities",
    ],
  },
]

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, duration: 0.8 } },
  }

  const detailsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="education" className="py-12 md:py-20 bg-[#111827] dark:bg-[#f1f5f9] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
        </motion.div>

        <motion.div
          ref={containerRef}
          style={{ opacity }}
          className="max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3EADCF] to-[#57D9FF] z-0"></div>

          <div className="space-y-24">
            {educationData.map((edu, index) => (
              <motion.div key={edu.id} className="relative z-10">
                {/* Timeline dot - styled exactly like in experience section */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#57D9FF] border-4 border-black dark:border-white z-20"></div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <motion.div
                    variants={itemVariants}
                    className="md:w-1/2 md:text-right md:pr-12 flex flex-col items-center md:items-end"
                  >
                    <Link href={edu.website} target="_blank" rel="noopener noreferrer" className="group">
                      <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black mb-2 group-hover:text-[#57D9FF] transition-colors">
                        {edu.institution}
                      </h3>
                    </Link>
                    <h4 className="text-lg font-semibold text-white dark:text-[#0f172a] mb-2">{edu.location}</h4>
                    <p className="text-[#57D9FF] mb-1">{edu.degree}</p>
                    {edu.field && (
                      <p className="text-[#D1D5DB] dark:text-gray-600 mb-1 text-center md:text-right">{edu.field}</p>
                    )}
                    {edu.specialization && (
                      <p className="text-[#D1D5DB] dark:text-gray-600 mb-1 text-center md:text-right">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-[#D1D5DB] dark:text-gray-600 mb-4">{edu.duration}</p>

                    <motion.div variants={logoVariants} whileHover={{ scale: 1.1 }} className="relative">
                      <Link href={edu.website} target="_blank" rel="noopener noreferrer">
                        <div className="w-24 h-24 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-[#3EADCF]/50 transition-shadow duration-300">
                          <img
                            src={edu.logo || "/placeholder.svg?height=100&width=100&query=university logo"}
                            alt={edu.institution}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <motion.div
                          className="absolute -inset-1 rounded-full border-2 border-[#57D9FF]/50 z-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                      </Link>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={detailsVariants} className="md:w-1/2 md:pl-12">
                    <motion.div
                      className="bg-[#111827] dark:bg-gray-100 p-6 rounded-lg border border-[#3EADCF]/30 shadow-lg hover:shadow-[#3EADCF]/20 transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <p className="text-[#D1D5DB] dark:text-[#475569] leading-relaxed mb-6 font-bold text-lg">
                        {edu.description}
                      </p>

                      <div className="pt-4 border-t border-[#3EADCF]/20">
                        <h5 className="text-white dark:text-[#0f172a] font-medium mb-3">Achievements & Activities:</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#57D9FF] mr-2">•</span>
                              <span className="text-[#D1D5DB] dark:text-[#475569]">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
