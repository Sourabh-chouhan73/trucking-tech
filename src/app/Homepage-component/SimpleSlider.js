import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const SimpleSlider = (props) => {
    const data1 = props.DispatchManagementSoftwareImgs;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000, // 3 seconds
  };

  return (
    <div style={{ width: '100%' , margin: 'auto' }}>
      <Slider {...settings}>
        
        {
            data1.map((item)=>(
                <div key={item.id}>
                     <Image className='slideimg' id={`img${item.id}`} src={item.img} alt="Slide 1" height={1000} width={1000}></Image>
                 </div>
            ))
        }
      </Slider>
    </div>
  );
};

export default SimpleSlider;
