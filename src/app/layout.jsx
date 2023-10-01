import './globals.css'

import SiteNavBar from '@/components/SiteNavBar'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: 'Agency Nextjs Web Application',
  description: 'created by Indrajit Das',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-body bg-white'>
        <NextTopLoader color="yellow" showSpinner={false} />
        <div className="bg-white text-black">
          <SiteNavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
