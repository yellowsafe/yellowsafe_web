import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (
        <>
            <div className="banner-wrapper-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-wrapper-content">
                                <span className="sub-title">Yellow Safe</span>
                                <h1>Amarillo, Acércate, Ayúdame</h1>
                                <p>Las personas mayores y sus cuidadores ahora tendrán mayor libertad y seguridad.</p>
                                <Link href="/contact">
                                    <a className="default-btn">Contáctanos</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="banner-wrapper-image">
                                <div className="banner-img">
                                    <img src="/images/pagweb.jpg" alt="banner-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;
