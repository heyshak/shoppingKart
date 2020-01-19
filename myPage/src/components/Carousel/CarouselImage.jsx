import React from 'react'

export default function CarouselImage({src}) {
   const ImageStyle = {
        width:100 + '%',
        height:'auto',
    }
    return (
       <img src={src} alt="" style={ImageStyle}/>
    )
}
