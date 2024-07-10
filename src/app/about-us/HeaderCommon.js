import React from 'react';

const HeaderCommon = ({title}) => {
    return (
        <div>
            <section className='header-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col header-col">
                            <h1 className='text-center'>{title}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeaderCommon;
