import React from 'react'

const ShimmerUI = () => {
  return (
    <div className='shimmer'>
      <div className='shimmer__info'>
       <div>
         <div className='shimmer__info--profile-icon__container'> </div>
          <div className='shimmer__info--profile-icon__name'></div>
       </div>
        <div className='shimmer__info--details'>
          <p className='shimmer__info--details__element'></p>
          <p className='shimmer__info--details__element'></p>
          <p className='shimmer__info--details__element'></p>
        </div>
       
      </div>
    </div>
  )
}

export default ShimmerUI
