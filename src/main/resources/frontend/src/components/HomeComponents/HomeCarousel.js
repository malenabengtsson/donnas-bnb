import React, { useState, useEffect} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CardImg
} from 'reactstrap';
import { withRouter } from 'react-router-dom'


const HomeCarousel  = (props) => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    let res = await fetch('/rest/residences')
    res = await res.json()
    let arryOfImages = []
    res.forEach(image => {
        arryOfImages.push(image)
    })
    setImages(arryOfImages)
  }

  const gotoResidence = id => {
    props.history.push('/residences/' + id)
   };

  useEffect(() => {
    getImages()
  }, [])

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const imgStyle = {
    margin: "10px",
    border: "1px solid gray",
    cursor: "pointer",
  }


  const slides = images.map((image, i) => {
    
    return (
     
      
      <CarouselItem className="bigpicture"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.images[0].img_path + i}
      >
        <div className="imagesize">
          <CardImg style={imgStyle}
                  top
                  width="100%"
                  src={image.images[0].img_path}
                  alt="Card image cap"
                  onClick={() => gotoResidence(image.id)}
                />
            </div>
      </CarouselItem>
     
    );
  });

  return (
    <div className="carousel-background">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default withRouter(HomeCarousel);