import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hulu</h1>
        <Header/>
        {/* Navbar */}
        {/* Content */}
      </main>
    </div>
  )
}
