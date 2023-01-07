import React from 'react'

function ImageShow({images}) {
    
  return (
    <div ><img src={images.urls.small} alt="Images from unsplash api"/></div>
  )
}

export default ImageShow