import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import TopHeader from './Homepage-component/TopHeader';
import WorkForceCard from './Homepage-component/WorkForceCard';
import OurProcess from './Homepage-component/OurProcess';
import OurSupport from './Homepage-component/OurSupport';
import OurConnections from './Homepage-component/OurConnections';
import GetADemo from './Homepage-component/GetADemo';
import ContactForm from './Homepage-component/ContactForm';
import OurSectors from './Homepage-component/OurSectors';
import GartnerDigitalMarkets from './Homepage-component/GartnerDigitalMarkets';
import WorkForce from './Homepage-component/WorkForce';
import Testimonials from './dispatch-software-demo/Testimonials';


const Page = () => {
  const macbookIphone = require('./images/2151541930.jpg');
  return (
    <>
      <TopHeader></TopHeader>
      <WorkForce></WorkForce>
      {/* <GartnerDigitalMarkets></GartnerDigitalMarkets> */}
      <OurConnections></OurConnections>
      <Testimonials></Testimonials>
      {/* <OurProcess></OurProcess> */}
      {/* <GetADemo></GetADemo> */}
      {/* <OurSupport></OurSupport> */}
    </>
  );
}

export default Page;
