'use client';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import truck from '../images/truck.jpg';
import Image from 'next/image';

const TopHeader = () => {
    // const img = required('../images/truck.jpg');
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    return (
        <>
            <section className='home-top-sec-one'>
                <div className='top-header'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={`head-txt ${inView1 ? 'animate__animated animate__fadeIn' : ''}`} ref={ref1}>
                                    <h1>Making Trucking Operation Better for Everyone</h1>
                                    <h3><i className="fa fa-certificate"></i> Dispatch Management Software</h3>
                                    <p>Software which can help you to manage your business hassle-free</p>
                                    <h3><i className="fa fa-certificate"></i> WorkForce Management Solution</h3>
                                    <p>We Provide well Trained People who can handle your business easily</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <article class="card-top-sec">
                                    <Image src={truck} height={400} width={550}></Image>


                                    <span class="top span-top-sec"></span>
                                    <span class="right span-top-sec"></span>
                                    <span class="bottom span-top-sec"></span>
                                    <span class="left span-top-sec"></span>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TopHeader;
