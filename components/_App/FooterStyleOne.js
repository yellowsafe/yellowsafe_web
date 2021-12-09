// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blackLogo from 'public/images/YS-06.png'

const FooterStyleOne = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link href="/">
                            <a className="logo">
                                    <Image
                                    src={blackLogo}
                                    alt="logo"
                                    // width={500} automatically provided
                                    // height={500} automatically provided
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                    />

                            </a>
                        </Link>

                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100075551120681" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/yellowsafecl/" target="_blank">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Soporte</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Politica de Privacidad</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">FAQ's</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contactenos</a>
                                </Link>
                            </li>
                        </ul>

                        <p className="copyright">Copyright &copy; {currentYear} <strong>Yellow Safe</strong>. All Rights Reserved by <a href="https://yellowsafe.cl/" target="_blank">Yellow Safe</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterStyleOne;
