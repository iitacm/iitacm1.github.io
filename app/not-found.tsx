"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-accent-color-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Coming Soon!
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
        The page you&apos;re looking for is in the works.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-accent-color-primary rounded-lg hover:bg-accent-color-primary/90 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}