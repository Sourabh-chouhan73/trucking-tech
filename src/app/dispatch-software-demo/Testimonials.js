import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Testimonials = () => {
   

    const data = [
        { title: 'Jaspreet Singh',loc:'USA',flag:'https://png.pngtree.com/png-clipart/20190516/original/pngtree-usa-flag--vector-illustration-png-image_3749931.jpg', content: 'The dispatch management software from Trucking techs has revolutionized our operations. Efficiency and productivity have skyrocketed!', url: 'https://thumbs.dreamstime.com/b/portrait-smiling-authentic-native-indian-punjabi-sikh-man-turban-bushy-beard-punjabi-man-105303214.jpg' },
        { title: 'Tejinder Singh',loc:'Canada',flag:'https://m.media-amazon.com/images/I/61GigilB2GL.jpg', content: 'Their workforce management solution is unparalleled. Our logistics have never been smoother, and our team loves the user-friendly interface.', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tQkZEMblIziP2fWRmuHSd4Hk3LJ9gAOVWA&s' },
        { title: 'Harpreet Kaur',loc:'Canada',flag:'https://m.media-amazon.com/images/I/61GigilB2GL.jpg', content: 'Fantastic support and robust features. The GPS tracking and fleet management tools have made a significant impact on our bottom line.', url: 'https://www.edubaivisa.ae/icons/Jones-Mariah.png' },
    ];
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 primary-color testimonial-head">Feedback from Our Valued Customers





</h2>
            <div className="row">
                {
                    data.map((item)=>(
                        <div key={item.id} className="col-md-4 d-flex align-items-stretch">
                        <div className={`card testimonial animate__animated animate__fadeInUp`}>
                            <div className="card-body text-center">
                                <img src={item.url} alt="Client 1" className="my-3 client-img" />
                                <h5 className='mt-5'>{item.title}</h5>
                                <p> <img src={item.flag} alt=" flag" className='flag-img' /> {item.loc}</p>
                                <div className='card-stars mt-4'>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                                <p className='my-4'>{item.content}</p>
                            </div>
                        </div>
                        </div>
                    ))
                }
               
                {/* <div className="col-md-4 d-flex align-items-stretch">
                    <div className={`card testimonial animate__animated animate__fadeInUp animate__delay-1s`}>
                        <div className="card-body text-center">
                            <img src="/images/testimonial2.jpg" alt="Client 2" className="mb-3" />
                            <h5>Jane Smith</h5>
                            <p>"The workforce management solution is top-notch. Our efficiency has improved drastically."</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-stretch">
                    <div className={`card testimonial animate__animated animate__fadeInUp animate__delay-2s`}>
                        <div className="card-body text-center">
                            <img src="/images/testimonial3.jpg" alt="Client 3" className="mb-3" />
                            <h5>Michael Brown</h5>
                            <p>"Fantastic support and user-friendly software. Our team loves it!"</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Testimonials;
