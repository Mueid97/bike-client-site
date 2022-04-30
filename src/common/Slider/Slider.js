import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/harley-davidson-2S4FDh3AtGw-unsplash.jpg';
import slide2 from '../../images/harley-davidson-eeTJKC_wz34-unsplash.jpg';
import slide3 from '../../images/harley-davidson-MVx3Y17umaE-unsplash.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: '600px'}}
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: '100vh'}}
          src= {slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: '100vh'}}
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Slider;