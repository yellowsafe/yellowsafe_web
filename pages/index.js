import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import MainBanner from '@/components/HomeDemo3/MainBanner'
import PartnerStyle2 from '@/components/Common/PartnerStyle2'
import IntroVideo from '@/components/Common/IntroVideo'
import KeyFeatures from '@/components/HomeDemo3/KeyFeatures'
import AppScreenshotsStyle3 from '@/components/AppScreenshots/AppScreenshotsStyle3'
import PricingPlanStyle3 from '@/components/PricingPlan/PricingPlanStyle3'
import BlogPost from '@/components/Common/BlogPost'
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import FunfactStyleOne from '@/components/Common/FunfactStyleOne'


const IndexPage3 = () => {
    return (
        <>
            <NavbarStyleTwo />

            <MainBanner />

            <PartnerStyle2 />

            <FunfactStyleOne />

            <IntroVideo />

            <KeyFeatures />

            <AppScreenshotsStyle3 />

            <PricingPlanStyle3 />

            <BlogPost />

            <FooterStyleOne />

        </>
    )
}

export default IndexPage3;
