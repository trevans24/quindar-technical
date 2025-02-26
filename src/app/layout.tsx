import "./globals.css"
import Provider from "./components/Provider"

export const metadata = {
  title: "Quindar Technical Interview",
  description: "App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
