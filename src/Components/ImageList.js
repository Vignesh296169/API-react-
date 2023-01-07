import React from 'react'
import styles from "./ImageList.module.css"
import ImageShow from './ImageShow'
function ImageList(props) {
  return (
         <div className={styles.imglist}>
          {props.images.map(item=><ImageShow key={item.id} images={item}/>)}
          
         
         
         </div>
  )
}

export default ImageList