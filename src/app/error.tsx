'use client'

export default function Error({
  reset,
}: {
  _error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="font-heading text-3xl font-bold text-[#F5F0E8] mb-4">
          Something went wrong
        </h2>
        <p className="text-[#888888] mb-8">
          We couldn&apos;t load the page. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-[#C9A84C] text-[#0A0A0A] px-6 py-3 rounded-md font-medium hover:bg-[#D4A843] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
