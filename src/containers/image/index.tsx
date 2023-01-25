import React from 'react'

const ImageContainer = (src:string) => {
  return (
    <div>
        <img src={src} alt="image" />
    </div>
  )
}

export default ImageContainer