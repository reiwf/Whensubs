import type { Metadata } from 'next'
import { Zen_Antique_Soft } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';

const zenAntiqueSoft = Zen_Antique_Soft({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Whensubs AI',
  description: 'AI-Powered',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={zenAntiqueSoft.className}>        
        {children}
        <Toaster position="bottom-right" reverseOrder={false} toastOptions={{
            className: 'toast-container', 
          }}/>
        </body>
    </html>
  )
}

