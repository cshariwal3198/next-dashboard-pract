import { Footer } from "@/components/footer/layout"
import { Header } from "@/components/header/layout"

export const metadata = {
  title: 'Next Pract',
  description: 'Generated by Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
