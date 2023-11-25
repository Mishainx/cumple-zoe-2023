import { Inter } from 'next/font/google'
import './globals.css'
import { VideoProvider } from './components/context/VideoContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cumple Zoe!',
  description: 'Next app for birthday party',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  )
}
