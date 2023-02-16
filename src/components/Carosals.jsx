import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../assets/images/slider.png';
import Wrapper from '../assets/wrappers/CarouselWrapper';



const Carosals = () => {

  return (
    <Wrapper>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div className="CarosalCaption">
              <h2>From students to senior citizens <br />
                this web portal of <br />
                <b>"Products and Classifieds”</b> <br />
                provides it all</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div className="CarosalCaption">
              <h2>From students to senior citizens <br />
                this web portal of <br />
                <b>"Products and Classifieds”</b> <br />
                provides it all</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div className="CarosalCaption">
              <h2>From students to senior citizens <br />
                this web portal of <br />
                <b>"Products and Classifieds”</b> <br />
                provides it all</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  )
}

export default Carosals