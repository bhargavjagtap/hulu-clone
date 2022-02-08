import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import requests from '../utils/requests';

export default function Home({results}) {
  console.log(results);
  
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>       
      <main>  
        <Header/>
        <Navbar/>
        <Content results={results}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`).then((res)=>res.json());
  return {
    props: {
      results: request
    }
  }
}