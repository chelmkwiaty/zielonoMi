import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import _1 from '../img/cards/_1.png'
import _2 from '../img/cards/_2.png'
import _3 from '../img/cards/_3.png'
import _4 from '../img/cards/_4.png'
import _5 from '../img/cards/_5.png'
import _6 from '../img/cards/_6.jpg'
import _7 from '../img/cards/_7.jpg'
import _8 from '../img/cards/_8.jpg'
import _9 from '../img/cards/_9.jpg'
import _10 from '../img/cards/_10.jpg'


const items = [
  
    {
      src: _1,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _2,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _3,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _4,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _5,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _6,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _7,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _8,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _9,
      altText: 'wiązanki i wieńce pogrzebowe',
    },
    {
      src: _10,
      altText: 'wiązanki i wieńce pogrzebowe',
    }
  ];

 
const CarouselWiazanki = () => {

    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.altText} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  

return(

    <Carousel
    activeIndex={activeIndex}
    next={next}
    previous={previous}
  >
    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    {slides}
    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
  </Carousel>

)


}

export default CarouselWiazanki;