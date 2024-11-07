import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const sliderContainerStyle = {
    width: '80vw',
    height: '80vh',
    margin: 'auto',
    position: 'relative',
    borderRadius: '20px',
    marginTop: '5vh'
  };

  const carouselStyle = {
    height: '100%',
  };

  const carouselInnerStyle = {
    height: '100%',
  };

  const carouselItemStyle = {
    height: '100%',
  };

  const imgStyle = {
    width: '100%',
    height: '80vh',
    objectFit: 'cover',
    borderRadius: '50px'
  };

  return (
    <div style={sliderContainerStyle}>
      <Carousel data-bs-theme="light" style={carouselStyle}>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100" 
            src="http://localhost:3000/uploads/slider1.jpg"
            alt="First slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="http://localhost:3000/uploads/slider2.jpg"
            alt="Second slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="http://localhost:3000/uploads/slider3.jpg"
            alt="Third slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
