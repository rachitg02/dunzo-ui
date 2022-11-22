import React from 'react'
import "./mainfold.css"
const Mainfold = () => {
  return (
    <div className='mainfold'>
      <div className='top-strip'>
        <div className='max-width flex strip-inner'>
          <div className='inner-left flex'>
            <div className='paan-image-bg flex absolute-center'>
              <img className='paan-image' src="https://resources.dunzo.com/web-assets/prod/_next/static/images/paan-3514c1ca4be5af789addd127f4c24308.png" alt="Paan Image" title="" width="32" height="32"/>
            </div>
            <div className='order-text'>
              Order Paan items, munchies and much more on our new Dunzo Mo app
            </div>
          </div>
          <div className='cur-po flex absolute-center strip-download'>
            Download Dunzo Mo app now
            <div className='flex absolute-center'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b37a" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mainfold-main">
        <div className='mainfold-location flex max-width'>
          Home
        </div>
      </div>
    </div>
  )
}

export default Mainfold