import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
function Banner() {
  return (
    <div style={{maxHeight:500}} className='relative overflow-hidden flex justify-center  items-center'>
      {/* <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'></div> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
        {/* <video className='w-full'  autoPlay loop muted>
            <source src={"/video.mp4"} type="video/mp4"/>
          </video> */}
          <img loading='lazy' src='/banner_2.jpeg' alt='' />
        </div>
        {/* <div>
          <img loading='lazy' src='https://links.papareact.com/6ff' alt='' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/7ma' alt='' />
        </div> */}
      </Carousel>
    </div>
  );
}

export default Banner;
