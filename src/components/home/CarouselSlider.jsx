
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImgSlider1 from '../../assets/images/slider-1.png'
import ImgSlider2 from '../../assets/images/slider-2.png'
import ImgSlider3 from '../../assets/images/slider-3.png'
import "./carousel.css"

export default function CarouselSlider(){
   return <Carousel
             autoPlay
             showThumbs={false}
             infiniteLoop
             swipeable
             showStatus={false}
             emulateTouch
             showArrows={false}
             className="mt-5"
             >
                <div>
                    <img src={ImgSlider1} alt="Imagen 1"/>
                </div>
                <div>
                    <img src={ImgSlider2} alt="Imagen 2"/>
                </div>
                <div>
                    <img src={ImgSlider3} alt="Imagen 3"/>
                </div>
                
            </Carousel>
}