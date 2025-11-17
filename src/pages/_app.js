import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { useEffect } from 'react'
import mermaid from 'mermaid'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true })
  }, [])
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
