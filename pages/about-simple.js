import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import TeamMemberStyle1 from '@/components/Common/TeamMemberStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutSimple = () => {
    return (
        <>
            <NavbarStyleTwo />

            <PageBannerStyle3
                pageTitle="Nosotros"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Nosotros"
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">Acerca de Yellow Safe</span>
                                <h2>¿Qué hacemos?</h2>
                                <p>Ofrecemos un servicio, consiste en una pulsera de silicona amarilla con código QR, en donde el código QR contiene la información de contacto en caso de emergencia, y la rutina que debe seguir la persona mayor día a día.</p>

                                <div className="features-text">
                                    <h6>Nuestra Misión</h6>
                                    <p>Entregar herramientas tecnológicas de control de rutina y localización, con el propósito de apoyar a los cuidadores de personas mayores con dependencia, junto con la creación de una conciencia social sobre esta incapacidad a través del color distintivo, el cual es el color amarillo.</p>
                                </div>
                                <div className="features-text">
                                    <h6>Nuestra Visión</h6>
                                    <p>Nuestra meta es que la dependencia en personas mayores sea identificable por todos a través del color amarillo, y así, convertirnos en los líderes en dependencia en personas mayores en Chile. De esta forma, queremos apoyar y facilitar el trabajo a
                                    familias y cuidadores de adultos mayores con dependencia en su increíble labor.</p>
                                </div>

                                <div className="features-text">
                                    <h6>Nuestros Valores</h6>
                                    <ul>
                                        <li><p><b>Compromiso:</b> Comprometernos con los clientes para superar sus expectativas. Yellow Safe se preocupa que su trabajo sea de forma eficaz y eficiente en las metas fijadas con cada cliente.</p></li>
                                        <li><p><b>Honestidad:</b> Queremos otorgar transparencia y responsabilidad en nuestro servicio. De modo de poder lograr relaciones a largo plazo y generar confianza con nuestros clientes.</p></li>
                                        <li><p><b>Espíritu de servicio:</b> Yellow Safe se esforzará al máximo para entregarle al cliente lo que este necesite de modo de que nuestro servicio se pueda adaptar a los clientes.</p></li>
                                        <li><p><b>Integridad:</b> Yellow Safe fomentará un actuar responsable, humilde y ético con los clientes.</p></li>
                                    </ul>
                                </div>
                                <div className="btn-box">
                                    <Link href="/sign-up">
                                        <a className="default-btn">Contáctanos</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">Mira todas las características</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/codigoQRlogo__1_-removebg.png" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <TeamMemberStyle1 />


            <FooterStyleOne />
        </>
    )
}

export default AboutSimple;
