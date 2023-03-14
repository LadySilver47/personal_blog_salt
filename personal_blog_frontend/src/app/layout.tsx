import NavBar from './(components)/NavBar'
import './globals.css'
import Loading from './loading'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='root__header'>
          <NavBar />
        </header>
        <main className='root__main'>
        {children}
        </main>
        </body>
    </html>
  )
}
