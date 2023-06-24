import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter ({
  weight: '300',
  subsets: ['latin'],
})

export const metadata = {
  title: 'GL - Gaming List',
  description: 'Uma pagina com uma lista de jogos.',
  author: 'wendeson gomes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f2f2f2] bg-[url('./assets/background.svg')]`}>{children}</body>
    </html>
  )
}
