import React from 'react'

export default function MarketCards({description,title,img}) {
  return (
    <div className='flex flex-col  h-[15%] bg-gray-100 p-2 ' style={{borderBottomRightRadius:"15px",borderBottomLeftRadius:'15px'}}>
        <div className='h-[50%] w-[100%]' ><img className='w-[100%] ' src={img}></img></div>
        <div className='h-[50%] w-[100%] text-balance  text-clip' >
            <h2 className='font-extrabold text-xl'>{title}</h2>
            <p className='text-center w-[auto]'>{description} 
            </p></div>
    
    </div >
  )
}
