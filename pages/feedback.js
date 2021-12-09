import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2'
import ClientFeedbackStyle3 from '@/components/Feedbacks/ClientFeedbackStyle3'
import ClientFeedbackStyle4 from '@/components/Feedbacks/ClientFeedbackStyle4'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import ClientFeedbackStyle6 from '@/components/Feedbacks/ClientFeedbackStyle6'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'

const Feedback = () => {
    return (
        <>
        <NavbarStyleTwo />

            <PageBannerStyle3
                pageTitle="Feedback"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Feedback"
            />

            <ClientFeedbackStyle1 />

            <ClientFeedbackStyle3 />

            <div className="pb-100">
                <ClientFeedbackStyle2 />
            </div>

            <ClientFeedbackStyle4 />

            <ClientFeedbackStyle5 />

            <ClientFeedbackStyle6 />

            <PartnerStyle3 />

            <FooterStyleOne />
        </>
    )
}

export default Feedback;
