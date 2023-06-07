import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'


1
const Banner = () => {
  return (
    <Carousel autoPlay={true} showArrows={false} showStatus={false} >
      <div>
        <img src="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png" />
        <p className="legend">Legend 1</p>
        
      </div>
      <div>
        <img src="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png" />
        <p className="legend">Legend 1</p>
     
      </div>
      <div>
        <img src="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png" />
        <p className="legend">Legend 1</p>
     
      </div>
      <div>
        <img src="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png" />
        <p className="legend">Legend 1</p>
     
      </div>
      <div>
        <img src="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png" />
        <p className="legend">Legend 1</p>
     
      </div>
      
    
    </Carousel>
  );
};

export default Banner;
