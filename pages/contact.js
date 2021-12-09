import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FooterStyleOne from '@/components/_App/FooterStyleOne'

const Contact = () => {
    return (
        <>
        <NavbarStyleTwo />

            <PageBannerStyle3
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
            />

            <ContactForm />

            <ContactInfo />

            <FooterStyleOne />
        </>
    )
}

export default Contact;
