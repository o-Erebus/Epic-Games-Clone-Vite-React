import {Carousel} from "react-responsive-carousel";
import React from "react";
import './ScreenshotCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ScreenshotCarousel = ({ screenshots }) => {
    return (
        <div>
            <Carousel className="custom-carousel" dynamicHeight={true} infiniteLoop={true} showIndicators={false} showStatus={false}>
                {screenshots.map((screenshot, index) => (
                    <img className='custom-carousel-img' key={index} src={screenshot.image} alt={`Screenshot ${index + 1}`}/>
                ))}
            </Carousel>
        </div>
    );
}

export default ScreenshotCarousel;