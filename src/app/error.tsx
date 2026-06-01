'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl text-primary font-bold">!</span>
        </div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-3">
          Something Went Wrong
        </h1>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          We encountered an error loading this page. Please try again.
        </p>
        {process.env.NODE_ENV === 'development' && error.message && (
          <p className="text-xs text-muted-foreground/60 mb-4 font-mono">
            {error.message}
          </p>
        )}
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:brightness-110 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
