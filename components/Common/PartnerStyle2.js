import dynamic from 'next/dynamic';
import React from 'react';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
    loop: false,
    margin: 25,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    center:true,

    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 6
        }
    }
};

const PartnerStyle2 = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="partner-area ptb-100">
                <div className="container">
                    <div className="partner-title">
                        Nuestros Aliados:
                    </div>

                    {display ? <OwlCarousel
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item">
                            <img src="/images/Grey_Logo-removebg-preview.png" alt="partner" />
                        </div>
                        <div className="partner-item">
                            <img src="/images/logo-innovacion.png" alt="partner" />
                        </div>

                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default PartnerStyle2;
