import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';

const DontRollBack = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go | Don't Roll Back</title>
            </Helmet>
            <Navigation />
            <h1>Don't Roll Back</h1>
            <Footer />
        </div>
    );
};

export default DontRollBack;