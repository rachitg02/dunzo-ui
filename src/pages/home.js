import React from 'react'
import Header from '../components/header'
import MainFold from '../components/mainfold'
import TopPicks from '../components/top-picks'
import AppDownload from '../components/app-download'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className='homepage'>
      <Header/>
      <MainFold/>
      <TopPicks/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home