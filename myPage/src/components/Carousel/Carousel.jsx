import React, { useState } from 'react'
import './Carousel.css'
import img1 from '../../assets/Zomato1.jpg'
import img2 from '../../assets/pizza3.jpg'
import CarouselImage from './CarouselImage'
export default function Carousel() {


    const [X, setX] = useState(0)
    // const [state, setstate] = useState(initialState) orginal form
    const sliderArr = [<CarouselImage src={img2} />,
    <CarouselImage src={img1} />,
    <CarouselImage src={img2} />,
    <CarouselImage src={img1} />,
    <CarouselImage src={img2} />]

    const goLeft = () => {
        X === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(X + 100)
        console.log(X)
    }
    const goRight = () => {
        // setX(X-100)
        X === -100 * (sliderArr.length - 1) ? setX(0) : setX(X - 100)
        console.log(X)
    }
    return (
        <div className="Carousel">
            {
                //Display all the images
                sliderArr.map((slide, index) => {
                    return <div key={index} className="Slide" style={{ 'transform': `translateX(${X}%)` }}>
                        {slide}
                    </div>
                })
            }

            {/* Button to navigate  right or left */}
            <div className="btn">
                <button className="GoLeft" onClick={goLeft}>
                    <i class="fa fa-chevron-left fa-2x"></i>
                </button>
            </div>
            <button className="GoRight" onClick={goRight}>
                <i class="fa fa-chevron-right fa-2x"></i>
            </button>
        </div>

    )
}

