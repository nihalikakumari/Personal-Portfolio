"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nihalika-kumari-915a51251/",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: Github,
      href: "https://github.com/nihalikakumari",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: Mail,
      href: "mailto:nihalikasinha405@gmail.com",
      label: "Email",
      color: "#EA4335",
    },
    {
      icon: Phone,
      href: "tel:+91 9939605596",
      label: "Phone",
      color: "#34A853",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/9939605596?text=Hi,%20How%20are%20you?",
      label: "WhatsApp",
      color: "#25D366",
    },
    {
      icon: Send,
      href: "https://t.me/nihalika_28",
      label: "Telegram",
      color: "#0088CC",
    },
  ]

  return (
    <motion.div
      className="fixed right-4 md:right-6 top-1/4 transform -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 transition-all duration-300 group"
            onClick={() => window.open(link.href, "_blank")}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon className="h-4 w-4 md:h-5 md:w-5 text-[#57D9FF] group-hover:text-white transition-colors" />
            <span className="sr-only">{link.label}</span>
          </Button>
        </motion.div>
      ))}

      <motion.div
        className="w-px h-16 md:h-20 bg-gradient-to-b from-[#3EADCF] to-transparent mx-auto mt-2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      />
    </motion.div>
  )
}
