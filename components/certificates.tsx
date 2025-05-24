"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificatesData = [
  {
    id: 1,
    title: "Full Stack Developer MERN",
    issuer: "SmartBridge",
    issuedDate: "April 2025",
    credentialId: "CC-FSD-2025-12783",
    description:
      "Comprehensive certification in MERN Stack development covering MongoDB, Express.js, React, and Node.js with hands-on project experience.",
    image: "https://smartinternz.com/images/company_logos/thumbs/1589433559SmartBridge_Logo.png",
    url: "https://skillwallet.smartinternz.com/internships/mongo_db/7854d49ba2f35c970603fbe7b70364f9",
  },
  {
    id: 2,
    title: "MongoDB Associate Database Administrator",
    issuer: "MongoDB University",
    issuedDate: "April 2025",
    credentialId: "MDB-2025-ADA",
    description:
      "Professional certification for MongoDB database administration, covering deployment, scaling, optimization, and database management best practices.",
    image: "https://technologypoint.in/wp-content/uploads/2021/06/MongoDB-sm-logo.gif",
    url: "https://drive.google.com/file/d/1EJKZ0xSbLm49qnxNS6SDCjW0mg8y_EJe/view?usp=sharing",
  },
  {
    id: 3,
    title: "The Bits and Bytes of Computer",
    issuer: "Google",
    issuedDate: "December 2023",
    credentialId: "GOOGLE-BBC-2023",
    description:
      "Foundational course covering computer hardware, software, networking, and troubleshooting fundamentals as part of Google's IT Support Professional Certificate.",
    image: "https://loodibee.com/wp-content/uploads/Google-Symbol-1024x1024.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/F5L27BE9ADUQ?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    id: 4,
    title: "Fundamentals of AI and ML",
    issuer: "Vityarthi",
    issuedDate: "May 2023",
    credentialId: "100617229237758313",
    description:
      "Comprehensive introduction to Artificial Intelligence and Machine Learning concepts, algorithms, and practical applications in modern technology.",
    image: "https://th.bing.com/th/id/OIP.LTItlvOlICR9yy1MvWpC0QAAAA?cb=iwc2&rs=1&pid=ImgDetMain",
    url: "https://drive.google.com/file/d/1b1o32tn8EKGmz8xIYKpHaMWGsZzg21Lc/view?usp=sharing",
  },
  {
    id: 5,
    title: "Python Essentials",
    issuer: "Vityarthi",
    issuedDate: "December 2022",
    credentialId: "100154261005926494",
    description:
      "Essential Python programming skills covering syntax, data structures, object-oriented programming, and practical application development.",
    image: "https://th.bing.com/th/id/OIP.LTItlvOlICR9yy1MvWpC0QAAAA?cb=iwc2&rs=1&pid=ImgDetMain",
    url: "v",
  },
  {
    id: 6,
    title: "Simulink Onramp",
    issuer: "MathWorks",
    issuedDate: "October 2022",
    credentialId: "MW-SIMULINK-2022",
    description:
      "Introduction to Simulink for modeling and simulating dynamic systems, covering block diagrams, simulation, and analysis techniques.",
    image: "https://th.bing.com/th/id/OIP.tWFNEU2_ZTCIQW97tH0DoAHaFb?cb=iwc2&rs=1&pid=ImgDetMain",
    url: "#",
  },
  {
    id: 7,
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    issuedDate: "September 2022",
    credentialId: "MW-MATLAB-2022",
    description:
      "Foundational MATLAB programming course covering syntax, data analysis, visualization, and computational problem-solving techniques.",
    image: "https://th.bing.com/th/id/OIP.tWFNEU2_ZTCIQW97tH0DoAHaFb?cb=iwc2&rs=1&pid=ImgDetMain",
    url: "#",
  },
]

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1))
  }

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1))
  }

  // Generate tech tags based on certificate type
  const getTechTags = (title: string) => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes("mern") || lowerTitle.includes("full stack")) {
      return ["MongoDB", "Express.js", "React", "Node.js"]
    } else if (lowerTitle.includes("mongodb")) {
      return ["MongoDB", "Database", "NoSQL", "Administration"]
    } else if (lowerTitle.includes("python")) {
      return ["Python", "Programming", "Data Structures", "OOP"]
    } else if (lowerTitle.includes("ai") || lowerTitle.includes("ml")) {
      return ["AI", "Machine Learning", "Algorithms", "Data Science"]
    } else if (lowerTitle.includes("matlab")) {
      return ["MATLAB", "Programming", "Data Analysis", "Computation"]
    } else if (lowerTitle.includes("simulink")) {
      return ["Simulink", "Modeling", "Simulation", "Systems"]
    } else if (lowerTitle.includes("google") || lowerTitle.includes("computer")) {
      return ["IT Support", "Hardware", "Networking", "Troubleshooting"]
    }
    return ["Technology", "Certification", "Skills", "Professional"]
  }

  return (
    <section id="certificates" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          <p className="mt-4 text-[#D1D5DB] dark:text-[#475569] max-w-2xl mx-auto">
            Professional certifications and courses that showcase my continuous learning and expertise in various
            technologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF]/20 to-[#57D9FF]/20 blur-3xl opacity-30 rounded-3xl"></div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111827]/80 dark:bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-[#3EADCF]/30 relative overflow-hidden shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden border-4 border-[#3EADCF] relative group bg-white p-4 flex items-center justify-center">
                  <img
                    src={certificatesData[currentIndex].image || "/placeholder.svg"}
                    alt={`${certificatesData[currentIndex].issuer} logo`}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/placeholder.svg?height=200&width=200&query=" + certificatesData[currentIndex].issuer + " logo"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 flex justify-center"
                >
                  {certificatesData[currentIndex].url !== "#" ? (
                    <a
                      href={certificatesData[currentIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white rounded-md hover:from-[#57D9FF] hover:to-[#3EADCF] transition-all duration-300 hover:scale-105"
                    >
                      Verify Certificate
                    </a>
                  ) : (
                    <span className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md opacity-50 cursor-not-allowed">
                      Certificate Unavailable
                    </span>
                  )}
                </motion.div>
              </div>

              <div className="md:w-2/3">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-[#57D9FF] dark:text-[#0284c7] mb-4"
                >
                  {certificatesData[currentIndex].title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col space-y-3 mb-6"
                >
                  <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                    <Building className="h-4 w-4 mr-2 text-[#57D9FF]" />
                    <span className="font-medium">Issued by:</span>
                    <span className="ml-2">{certificatesData[currentIndex].issuer}</span>
                  </div>

                  <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                    <Calendar className="h-4 w-4 mr-2 text-[#57D9FF]" />
                    <span className="font-medium">Issue Date:</span>
                    <span className="ml-2">{certificatesData[currentIndex].issuedDate}</span>
                  </div>

                  <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                    <Award className="h-4 w-4 mr-2 text-[#57D9FF]" />
                    <span className="font-medium">Credential ID:</span>
                    <span className="ml-2 text-sm break-all">{certificatesData[currentIndex].credentialId}</span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[#D1D5DB] dark:text-[#475569] mb-6"
                >
                  {certificatesData[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {getTechTags(certificatesData[currentIndex].title).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-black/40 dark:bg-white/40 rounded-full text-[#57D9FF] dark:text-[#0284c7] text-sm border border-[#3EADCF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 z-10"
            onClick={prevCertificate}
          >
            <ChevronLeft className="h-6 w-6 text-[#57D9FF]" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 z-10"
            onClick={nextCertificate}
          >
            <ChevronRight className="h-6 w-6 text-[#57D9FF]" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {certificatesData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#57D9FF]" : "bg-[#3EADCF]/30 hover:bg-[#3EADCF]/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Certificate counter */}
          <div className="text-center mt-4">
            <span className="text-[#D1D5DB] dark:text-[#475569] text-sm">
              {currentIndex + 1} of {certificatesData.length} certificates
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
