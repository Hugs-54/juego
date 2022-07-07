import React from 'react';
import { Helmet } from 'react-helmet';
import Bloc from './Bloc';
import Footer from './Footer';
import Navigation from './Navigation';

const JurassicIslas = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go | Jurassic Islas</title>
            </Helmet>
            <Navigation />
            <h1>Jurassic Islas</h1>
            <Bloc imgSrc="./Logo_JurassicIslas.png" isImgFirst={true} />
            <Bloc imgSrc="./Logo_JueGo.png" />
            <Bloc imgSrc="./Logo_JueGo.png" isImgFirst={true} />
            <Bloc imgSrc="./Logo_JurassicIslas.png" />
            <Footer />
        </div>
    );
};

export default JurassicIslas;