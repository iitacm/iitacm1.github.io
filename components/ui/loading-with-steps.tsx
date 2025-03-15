"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingWithSteps() {
  const [step, setStep] = useState(0)
  const steps = ["Initializing", "Loading data", "Preparing UI", "Almost there"]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, 800)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-md px-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Loading</h2>
            <p className="text-sm text-muted-foreground">
              {step + 1}/{steps.length}
            </p>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full bg-accent-color-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            />
          </div>

          <motion.p
            key={step}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-muted-foreground"
          >
            {steps[step]}...
          </motion.p>
        </div>
      </div>
    </div>
  )
}