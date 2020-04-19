import React, { useState, useContext, useEffect} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CardImg,
} from 'reactstrap';

import { ResidenceContext } from '../../contexts/ResidenceContextProvider'


const Slideshow  = (props) => {
  const { residences } = useContext(ResidenceContext)
  const [images, setImages] = useState([])

  const settingImages = async () => {
    setImages(props.residenceId)
  }

  useEffect(() => {
    settingImages()
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


  const slides = images.map((image, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.img_path + i}
      >
          <CardImg
                  top
                  width="100%"
                  src={image.img_path}
                  alt="Card image cap"
                />
    
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slideshow ;
