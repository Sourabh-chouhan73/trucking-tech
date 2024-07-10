'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const OurProcess = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

    return (
        <div>
            <section className='section-8'>
                <div className="container sec-8-con">
                    <h1 className='sec-8-title'>OUR PROCESS</h1>
                    <p>We like to get to know you and your business needs. A Trucking Techs team member will take the time to cover all of the software features and train your team on how to use the system to make sure you take advantage of the efficiencies Trucking techs can bring.</p>
                    <div className="row">
                        <div className="col-lg-3 sec-8-col">
                            <div ref={ref1} className={inView1 ? "animate__animated animate__bounceIn" : ""}>
                                <i className="fa fa-calendar fa-2x"></i>
                       
                            </div>
                            <span className='sec-8-span'>MEET</span>
                        </div>
                        <div className="col-lg-3 sec-8-col">
                            <div ref={ref2} className={inView2 ? "animate__animated animate__bounceIn animate__delay-1s" : ""}>
                                <i className="fa fa-bullhorn fa-2x"></i>
                              
                            </div>
                           <span className='sec-8-span'>PLAN</span>
                        </div>
                        <div className="col-lg-3 sec-8-col">
                            <div ref={ref3} className={inView3 ? "animate__animated animate__bounceIn animate__delay-2s" : ""}>
                                <i className="fa fa-heart fa-2x"></i>
                           
                            </div>
                            <span className='sec-8-span'>TRAIN</span>
                        </div>
                        <div className="col-lg-3 sec-8-col">
                            <div ref={ref4} className={inView4 ? "animate__animated animate__bounceIn animate__delay-3s" : ""}>
                                <i className="fa fa-space-shuttle fa-2x"></i>
                            </div>
                            <span className='sec-8-span'>LAUNCH</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurProcess;
