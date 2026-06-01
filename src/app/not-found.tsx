'use client'

import Link from 'next/link'
import { Scissors } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-6">
          <Scissors className="w-7 h-7 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
          404
        </h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Page not found. Let&apos;s get you back to a fresh cut.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:brightness-110 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
