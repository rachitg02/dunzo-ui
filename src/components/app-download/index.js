import React from 'react'
import "./app-download.css"
const AppDownload = () => {
  return (
    <div className='app-download flex absolute-center'>
      <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-daily-app-preview-7c97560e963bcd173c11c470b2ff63ed.png'
      alt="App Download"
      height={237}
      width={205}/>
      <div className='flex column'></div>
    </div>
  )
}

export default AppDownload