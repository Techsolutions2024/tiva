import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import UseCases from '../components/UseCases';
import ProcessFlow from '../components/ProcessFlow';
import TechSpecs from '../components/TechSpecs';
import UserStories from '../components/UserStories';
import TechBlog from '../components/TechBlog';
import CTA from '../components/CTA';

const HomePage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Solutions />
            <UseCases />
            <ProcessFlow />
            <TechSpecs />
            <UserStories />
            <TechBlog />
            <CTA />
        </>
    );
};

export default HomePage;
