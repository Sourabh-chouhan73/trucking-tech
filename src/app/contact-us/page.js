import React from 'react';
import HeaderCommon from '../about-us/HeaderCommon';
import ContactForm from '../Homepage-component/ContactForm';

const Page = () => {
    const title='Contact Us'
    return (
        <div>
            
            <HeaderCommon title={title}></HeaderCommon>
            <ContactForm></ContactForm>
        </div>
    );
}

export default Page;
