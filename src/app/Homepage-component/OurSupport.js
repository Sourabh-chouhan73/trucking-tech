'use client'
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const OurSupport = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

    return (
        <div>
            <section className='section-7'>
                <div className="container">
                    <div className={`row sec-7-row ${inView1 ? 'animate__animated animate__fadeIn' : ''}`} ref={ref1}>
                        <h1 className='sec-7-title text-center'>SOFTWARE SUPPORT</h1>
                        <p className='text-center'>
                            Trucking Techs offers free email support for all customers. In addition, Trucking Techs provides customers with user manuals and videos for training purposes. Below is a list of videos to help and we can provide user manuals upon request.
                        </p>
                        <div className='text-center'>
                            <button className='btn btn-primary'>View User Guides and Videos</button>
                        </div>
                        <p className='text-center'>
                            For additional assistance, please email the support team at <Link className='primary-color' href='mailto:support@truckingtechs.net'>support@transportpro.net</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurSupport;
