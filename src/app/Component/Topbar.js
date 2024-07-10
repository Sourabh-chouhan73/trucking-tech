import React from 'react';

const Topbar = () => {
    return (
        <div>
            <section className='topbar-section d-none  d-lg-block'>
                <div className="container">
                    <div className="row">
                        <div className="col-8 topbar-col-1">
                            <p><i class="fa fa-map-marker"></i> location TX 75035 ,USA</p>
                            <p><i class="fa fa-phone-square"></i> +91 97 895 49 123</p>
                            <p><i class="fa fa-envelope"></i> Support@gmail.com</p> 
                        </div>
                        <div className="col-4 topbar-col-2">
                        <div className='topbar-social-icon'>
                            <i class="fa fa-facebook-f"></i>
                            <i class="fa fa-twitter-square"></i>
                            <i class='fa fa-youtube-play'></i>
                            <i class="fa fa-instagram "></i>
                        </div>
                        </div>
                    </div>
                </div>
        
            </section>  
        </div>
    );
}

export default Topbar;
