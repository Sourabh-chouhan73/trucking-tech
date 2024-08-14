import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurConnections = () => {
    return (
        <div>
             <section className='section-6'>
        <div className="container">
          <div className="row">
            <div className="col  sec-6-col">
              <h1 className='text-center'>CONNECTIONS TO MAJOR SERVICE PROVIDERS</h1>
              <p className='text-center'>Click here to see full list of our integration partners</p>
              <div className='sec-6-img-con fade-in'>
                <Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/comdata.png" alt="" width={150} height={50} />
                </Link>
                <Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/efs.png" alt="" width={150}  height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/fleetone.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/loves.png" alt="" width={150}  height={50}/>
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/apex-clear.png" alt="" width={150}  height={50}/>
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/ecapital.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/dat.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/truckstop_logo2022.svg" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/keeptruckin.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/123Loadboard.svg" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/omnitracs.png" alt="" width={150}  height={50}/>
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/samsara.png" alt="" width={100}  height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/macropoint.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/fourkites.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/promiles.png" alt="" width={150} height={50} />
                </Link><Link href={''} className='m-2'>
                  <Image src="https://www.transportpro.net/images/partner/transflo.png" alt="" width={150} height={50} />
                </Link>


              </div>

            </div>
          </div>
        </div>

      </section>
        </div>
    );
}

export default OurConnections;
