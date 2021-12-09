// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import Link from '@/utils/ActiveLink';

import React from "react";

const NavbarStyleTwo = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="texap-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light bg-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                <img src="/images/YS-09_opti.png" alt="logo" />


                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Inicio
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-simple" activeClassName="active">
                                            <a onClick={toggleNavbar}  className="nav-link">
                                                Nosotros
                                            </a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Pages
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Pages I</h6>
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/team" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Team 1</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/team-2" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Team 2</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/how-it-works" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>How It Works</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/gallery" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Gallery</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/services" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Services</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/pricing" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Pricing Plan</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Pages II</h6>
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/feedback" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Reviews</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/sign-in" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Sign In</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/sign-up" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Sign Up</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/forget-password" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Forget Password</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/privacy-policy" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Privacy Policy</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/terms-conditions" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Terms & Conditions</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Pages III</h6>
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/screenshots" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Screenshots</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/faq" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>FAQ</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/coming-soon" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Coming Soon</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/404" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>404 Error Page</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/app-download" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>App Download</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/contact" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>Contact Us</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <a href="https://www.facebook.com/" target="_blank" className="d-block p-0">
                                                                <img src="/images/navbar.jpg" alt="image" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li> */}

                                    <li className="nav-item">
                                        <Link href="/features-2">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Características
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/how-it-works">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Cómo Funciona
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/blog-grid">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Novedades
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contacto</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options">
                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contáctanos
                                    </a>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarStyleTwo;
