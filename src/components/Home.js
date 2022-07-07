import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go</title>
            </Helmet>
            <Navigation />
            <h1>Accueil</h1>
            <Footer />
        </div>
    );
};

export default Home;