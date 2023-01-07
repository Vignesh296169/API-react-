import React from 'react'
import ImageShow from './ImageShow'
function ImageList(props) {
  return (
         <>
          {props.images.map(item=><ImageShow key={item.id} images={item}/>)}
          
         
         
         </>
  )
}

export default ImageList