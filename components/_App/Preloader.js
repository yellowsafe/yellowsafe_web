import Image from 'next/image'
import blackLogo from 'public/images/YS-09_opti.png'
import React from 'react'
const Preloader = () => {
    return (
        <>
            <div className="preloader-area">
                <div className="d-table">
                    <div className="d-table-cell">
                    <Image
                    src={blackLogo}
                    alt="logo"
                    // width={300} //automatically provided
                    // height={500} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <p>Cargando...</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .preloader-area {
                    position: fixed;
                    background: #fff;
                    width: 100%;
                    top: 0;
                    height: 100%;
                    z-index: 1010;
                    left: 0;
                    text-align: center;
                    opacity: .96;
                }
                .preloader-area img {
                    margin-bottom: 5px;
                }
                .preloader-area p {
                    font-size: 17px;
                }
            `}</style>
        </>
    )
}

export default Preloader;
