import Image from 'next/image';
import React from 'react';

const Topbar = () => {
    const canadaimg= require('../images/canada.png');
    const indiaimg= require('../images/india.png');

    return (
        <div>
            <section className='topbar-section d-none  d-lg-block'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 topbar-col-1">
                            <p><i class="fa fa-envelope"></i> <a href="mailto:inquiry@truckingtechs.com">inquiry@truckingtechs.com</a>   |   <a href="mailto:support@truckingtechs.com">support@truckingtechs.com</a></p> 
                        </div>
                        <div className="col-6 topbar-col-2">
                        <div className='topbar-social-icon'>
                            <div className='d-flex mx-4'>
                                <Image src={indiaimg} height={20} width={35}></Image>
                                <p className='pr-2'><a href="tel:+918965029288">Call Us: +91 8965029288</a></p>
                            </div>
                            <div className='d-flex'>
                                <Image src={canadaimg} height={20} width={35}></Image>
                                <p className='pr-2'><a href="tel:+14375773571">Call Us: +1 437-577-3571</a></p>
                            </div>
                            

                            {/* <i class="fa fa-facebook-f"></i>
                            <i class="fa fa-twitter-square"></i>
                            <i class='fa fa-youtube-play'></i>
                            <i class="fa fa-instagram "></i> */}
                        </div>
                        </div>
                    </div>
                </div>
        
            </section>  
        </div>
    );
}

export default Topbar;
