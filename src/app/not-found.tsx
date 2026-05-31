import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-5xl font-bold text-[#C9A84C] mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-[#F5F0E8] mb-4">
          Page not found
        </h2>
        <p className="text-[#888888] mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to a fresh cut.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-6 py-3 rounded-md font-medium hover:bg-[#D4A843] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
