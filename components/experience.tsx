"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const experienceData = [
  {
    id: 1,
    company: "iAssist Innovations Labs Private Limited",
    location: "Bangalore",
    position: "AI/ML Intern",
    duration: "(December 2024 - Present)-Remote",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/f7uioigeudib6vemxacm",
    website: "https://www.iail.in/",
    description:
      "Learning and working on projects involving AI/ML applications and DevOps tools and methodologies and practices. Contributing to the development of solutions that bridge the gap between development, deployment, and operations. Working on projects that involve AI and machine learning applications, contributing to the development of innovative solutions. Gaining hands-on experience in implementing AI models and integrating them with real-world systems.",
    skills: ["AI/ML", "Python", "DevOps", "Cloud Computing"],
  },
  {
    id: 2,
    company: "Shriram Bioseed Genetics",
    location: "Hyderabad",
    position: "Software Development Engineer Intern",
    duration: "(November 2024 - December 2024)-Remote",
    logo: "https://cdn.shopify.com/s/files/1/0722/2059/files/Bioseed-Logo.jpg",
    website: "https://bioseed.com/about-us",
    description:
      "Developed an customized AI chatbot aimed at optimizing internal management operations and enhancing overall productivity. Building intelligent automation systems to analyze and process large datasets, providing valuable insights to streamline workflows. Collaborating with cross-functional teams to integrate AI technologies into internal processes, improving decision-making and operational efficiency.",
    skills: ["AI Chatbot", "Automation", "Data Analysis", "Cross-functional Collaboration"],
  },
  {
    id: 3,
    company: "OctaNet Services Pvt Ltd.",
    location: "Remote, India",
    position: "Python Developer Intern",
    duration: "(January 2024 - February 2024)-Remote",
    logo: "https://internship.aicte-india.org/uploads/logo/CORPORATE64d762ff206251691837183.png",
    website: "https://octanet.in/",
    description:
      "This internship served as an invaluable educational opportunity, where the primary focus was on learning, skill development, and gaining hands-on experience. I dedicated myself to performing all assigned tasks to the best of my ability, ensuring adherence to lawful and reasonable instructions provided throughout the duration of the internship.",
    skills: ["Python", "Web Development", "API Integration", "Database Management"],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Experience</h2>
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
            {experienceData.map((exp, index) => (
              <motion.div key={exp.id} className="relative z-10">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#57D9FF] border-4 border-black dark:border-white z-20"></div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <motion.div
                    variants={itemVariants}
                    className="md:w-1/2 md:text-right md:pr-12 flex flex-col items-center md:items-end"
                  >
                    <Link href={exp.website} target="_blank" rel="noopener noreferrer" className="group">
                      <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black mb-2 group-hover:text-[#57D9FF] transition-colors">
                        {exp.company}
                      </h3>
                    </Link>
                    <h4 className="text-xl md:text-2xl font-semibold text-white dark:text-[#0f172a] mb-2">
                      {exp.location}
                    </h4>
                    <p className="text-[#57D9FF] mb-2">{exp.position}</p>
                    <p className="text-[#D1D5DB] dark:text-gray-600 mb-4">{exp.duration}</p>

                    <motion.div variants={logoVariants} whileHover={{ scale: 1.1 }} className="relative">
                      <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                        <div className="w-24 h-24 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-[#3EADCF]/50 transition-shadow duration-300">
                          <img
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
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
                      <p className="text-[#D1D5DB] dark:text-[#475569] leading-relaxed mb-6">{exp.description}</p>

                      <div className="pt-4 border-t border-[#3EADCF]/20">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-black/40 dark:bg-white/40 rounded-full text-[#57D9FF] dark:text-[#0284c7] text-sm border border-[#3EADCF]/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
