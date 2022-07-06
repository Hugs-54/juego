import React from 'react';
import { Helmet } from 'react-helmet';
import Bloc from './Bloc';
import Navigation from './Navigation';

const JurassicIslas = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go | Jurassic Islas</title>
            </Helmet>
            <Navigation />
            <h1>Jurassic Islas</h1>
            <Bloc />

        </div>
    );
};

export default JurassicIslas;