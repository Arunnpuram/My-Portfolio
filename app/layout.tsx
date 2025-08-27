import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arun Puram - DevOps Engineer',
  description: 'Portfolio of Arun Puram, DevOps Engineer specializing in cloud infrastructure and automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}