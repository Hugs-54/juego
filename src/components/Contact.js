import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go | Contact</title>
            </Helmet>
            <Navigation />
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;