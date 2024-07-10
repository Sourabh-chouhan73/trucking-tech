'use client';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const GartnerDigitalMarkets = () => {
    const img1 = require('../images/sa-frontrunners-2024-283x300.png.webp');
    const img2 = require('../images/ca-shortlist-2024-300x234.png.webp');
    const img3 = require('../images/ga-category_leaders-2024-1-300x234.png.webp');

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

    return (
        <div>
            <section className='section-4 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={`digi-col ${inView1 ? "animate__animated animate__fadeInUp" : ""}`} ref={ref1}>
                                <Image src={img1} height={180} width={220} />
                            </div>
                            <p className='text-center mt-2 digi-text'>FRONT RUNNERS 2024 TOP TRANSPORTATION MANAGEMENT SYSTEMS</p>
                        </div>
                        <div className="col-lg-4">
                            <div className={`digi-col ${inView2 ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}`} ref={ref2}>
                                <Image src={img2} width={220} />
                            </div>
                            <p className='text-center mt-2 digi-text'>CAPTERRA SHORTLIST FOR FLEET MANAGEMENT</p>
                        </div>
                        <div className="col-lg-4">
                            <div className={`digi-col ${inView3 ? "animate__animated animate__fadeInUp animate__delay-2s" : ""}`} ref={ref3}>
                                <Image src={img3} width={220} />
                            </div>
                            <p className='text-center mt-2 digi-text'>TOP RANKING TRANSPORTATION DISPATCH SOFTWARE</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GartnerDigitalMarkets;
