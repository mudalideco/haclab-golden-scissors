import type { Metadata } from 'next'
import { Playfair_Display, Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Golden Scissors Salon | Jinja\'s Premier Barber — Ben Ozzly',
  description:
    'Premium barbershop in Jinja, Uganda. Master barber Ben Ozzly offers precision cuts, flawless fades, hot towel shaves, and beard grooming. Book via WhatsApp.',
  keywords: ['barber Jinja', 'haircut Jinja', 'Golden Scissors Salon', 'Ben Ozzly', 'barbershop Uganda', 'fade Jinja'],
  openGraph: {
    title: 'Golden Scissors Salon | Jinja\'s Master Barber',
    description: 'Precision cuts, flawless fades, and the perfect shave — by Ben Ozzly at Golden Scissors Salon, Main Street, Jinja',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${dmSans.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
