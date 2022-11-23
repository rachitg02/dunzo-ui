import React from 'react'
import { ITEM_TYPES, ORDER_CARDS_DATA } from '../../common/data'
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
          <div className='mainfold-address-1'>
              Home
          </div>
          <div className='flex absolute-center location-arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c9cdd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </div>
          <div className='mainfold-address-2'>
            Dehradun
          </div>
        </div>
        <div className='mainfold-info max-width'>
        <div className='mainfold-city'>Dehradun</div>
        <div className='mainfold-description'>Why step out when you can get everything delivered home with the tap of a button? Dehradun’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</div>
        </div>
        <div className='order-cards max-width flex'>
          {ORDER_CARDS_DATA.map((card)=>{
            return (
              <div className='order-card-container'>
                <img className='cur-po order-card-container' src={card.banner} alt={card.banner}/>
              </div>
            )
          })}
        </div>
        <div className='items-cards flex max-width'>
          {
            ITEM_TYPES.map((item)=>{
              return (
                <div className='items-card cur-po'>
                  <img className='items-card-banner' src={item.banner} alt={item.title}/>
                  <div>{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Mainfold