import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go | Contact</title>
            </Helmet>
            <Navigation />
            <h1>Contact</h1>
            <Footer />
        </div>
    );
};

export default Contact;