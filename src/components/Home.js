import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go</title>
            </Helmet>
            <Navigation />
            <h1>Accueil</h1>
        </div>
    );
};

export default Home;