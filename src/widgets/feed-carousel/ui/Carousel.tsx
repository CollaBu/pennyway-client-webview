import { Carousel as CarouselBox } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Image } from '@/shared/consts';

import './Carousel.scss';

interface CarouselProps {
  images: Image[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <CarouselBox
      className='carousel-container'
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      autoPlay={false}
      swipeable={true}
      emulateTouch={true}
      showIndicators={images.length > 1}
    >
      {images.map((image) => (
        <div key={image.id} className='carousel-item'>
          <img src={image.imageUrl} alt='carousel-img' />
        </div>
      ))}
    </CarouselBox>
  );
};
