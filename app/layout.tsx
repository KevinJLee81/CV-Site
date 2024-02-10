import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Lee CV',
  description: 'Cloud Portfolio',
  keywords: 'Cloud, AWS, Azure, GCP, DevOps, Python, C#, TypeScript, SQL, CI/CD, S3, Cloudfront, React, Python, Bash, Portfolio, Splunk, Lambda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
    <html lang="en" data-theme="black">
      <body className={inter.className}>{children}</body>
    </html>
  </>
  )
}
