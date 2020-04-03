import React, { useState, useContext, useEffect} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardImg,
} from 'reactstrap';

import { ResidenceContext } from '../../contexts/ResidenceContextProvider'


const HomeSlideshow  = (props) => {
  const { residences } = useContext(ResidenceContext)
  const [images, setImages] = useState([])

  const getImages = async () => {
    let res = await fetch('/rest/images')
    res = await res.json()
    let arryOfImages = []
    // console.log(res)
    res.forEach(image => {
      if (image.residence_id === props.residenceId) {
        arryOfImages.push(image)
      }
    })
    setImages(arryOfImages)
  }

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
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.img_path + i}
      >
          <div >
          <CardImg style={imgStyle}
                  top
                  width="100%"
                  src={image.img_path}
                  alt="Card image cap"
                />
                </div>
        {/* <img src={image.img_path} alt={'item.altText'} /> */}
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

export default HomeSlideshow ;