"use client"

import { motion } from "framer-motion"

const skillsData = {
  Languages: [
    { name: "Java", logo: "/java-logo.png" },
    { name: "Python", logo: "/python-logo.png" },
    { name: "TypeScript", logo: "https://th.bing.com/th/id/OIP.xFXr-aqc92ggTleStg3UOQHaFC?cb=iwc2&w=728&h=496&rs=1&pid=ImgDetMain" },
    { name: "C", logo: "/c-programming-logo.png" },
    { name: "C++", logo: "/cpp-logo.png" },
    { name: "JavaScript", logo: "https://th.bing.com/th/id/OIP.0qThwGUlnULLAz8MTnN9QwHaHa?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "HTML", logo: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/51703b85-ef3f-4d45-fae0-c39d4c733900/preview" },
    { name: "CSS", logo: "https://th.bing.com/th/id/OIP.hG6v403fXEtFUUkC_PUq2QHaKt?cb=iwc2&rs=1&pid=ImgDetMain" },
  ],
  "Frameworks & Libraries": [
    { name: "Flask", logo: "https://th.bing.com/th/id/OIP.pelvrRMqLRe2X4Kxw0de0QHaJh?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "Django", logo: "https://th.bing.com/th/id/OIP.3ua5BGFwm_fiQDbrYtc3BAHaE1?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "React", logo: "https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg" },
    { name: "Node.js", logo: "https://seekvectors.com/files/download/node%20js%20logo.png" },
    { name: "Express", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/a8b52/express-js.png" },
    { name: "Scikit-learn", logo: "https://th.bing.com/th/id/OIP.Hf2oXZgEGL98vH30SEeZQQAAAA?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "TensorFlow", logo: "https://logowik.com/content/uploads/images/tensorflow4903.jpg" },
    { name: "PyTorch", logo: "https://th.bing.com/th/id/OIP.H_SbstiCzFsEvVUppwRiWwHaHe?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "OpenCV", logo: "https://th.bing.com/th/id/OIP.Zd5vR6rBE-rHR7EteVlmYgHaHD?cb=iwc2&rs=1&pid=ImgDetMain" },
  ],
  "Web Development & Databases": [
    { name: "Firebase", logo: "https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo.png" },
    { name: "MongoDB", logo: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon.png" },
    { name: "MySQL", logo: "https://th.bing.com/th/id/OIP.gxvDpyZ1sNkmEeet1bsn4gHaHa?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "SupaBase", logo: "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png" },
    { name: "NoSQL", logo: "https://w7.pngwing.com/pngs/452/601/png-transparent-object-database-nosql-nuget-nosql-icon-blue-data-electric-blue.png" },
    { name: "PostgreSQL", logo: "https://th.bing.com/th/id/OIP.OLVs3hIrsatz5RPKbYdYyQHaHa?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "REST APIs", logo: "https://www.customerparadigm.com/wp-content/uploads/2023/04/Rest-API_logo.png" },
    { name: "Postman", logo: "https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo.png" },
  ],
  "General Tools & Concepts": [
    { name: "Git", logo: "https://th.bing.com/th/id/OIP.T7G3pW-gRmLWrrA8C-fqXwHaHa?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "DSA", logo: "https://th.bing.com/th/id/OIP.H46_rdPdiKz0W6xorEe8nQHaHa?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "OOPs", logo: "https://jobssforu.in/wp-content/uploads/2022/09/image-1.png" },
    { name: "DBMS", logo: "https://thumbs.dreamstime.com/b/blue-round-dbms-concept-vector-linear-line-icons-database-management-system-internet-technology-modern-online-services-106434877.jpg" },
    { name: "OS", logo: "https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-OS-Logo-Design-by-Greenlines-Studios.jpg" },
    { name: "CN", logo: "https://w1.pngwing.com/pngs/70/795/png-transparent-internet-logo-computer-network-computer-network-diagram-telecommunications-network-networking-hardware-user-local-area-network-management.png" },
    { name: "Miro", logo: "https://th.bing.com/th/id/OIP.PtckDjpRUAtUpRSZMMQZrQHaHS?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "Docker", logo: "https://th.bing.com/th/id/OIP.Qzze5GFWneJbKtedl912ewHaFN?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "AWS", logo: "https://image.pngaaa.com/681/876681-middle.png" },
    { name: "Power BI", logo: "https://th.bing.com/th/id/OIP.Oxo-u9GMK3zbEM5h-FiVnQHaEK?cb=iwc2&rs=1&pid=ImgDetMain" },
    { name: "Tableau", logo: "https://brollyacademy.com/wp-content/uploads/2022/08/2.png" },
    { name: "Advanced Excel", logo: "https://static.vecteezy.com/system/resources/previews/027/179/371/large_2x/microsoft-excel-icon-logo-symbol-free-png.png" },
  ],
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="skills" className="py-12 md:py-20 bg-[#111827] dark:bg-[#f1f5f9] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-[#D1D5DB] dark:text-[#475569] max-w-2xl mx-auto"
          >
            Here are some of my skills on which I have been working for the past few years.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-black/30 dark:bg-white/70 p-6 rounded-lg border border-[#111827] dark:border-[#e2e8f0] shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-[#57D9FF] dark:text-[#0284c7]">{category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(87, 217, 255, 0.5)",
                      y: -5,
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-black/40 dark:bg-white/80 rounded-full p-3 border border-[#3EADCF]/30 shadow-sm">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "/code-icon.png"
                        }}
                      />
                    </div>
                    <span className="text-white dark:text-[#0f172a] text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
