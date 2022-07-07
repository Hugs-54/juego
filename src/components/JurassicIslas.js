import React from 'react';
import { Helmet } from 'react-helmet';
import Bloc from './Bloc';
import Footer from './Footer';
import Navigation from './Navigation';

const JurassicIslas = () => {
    return (
        <div className='backgroundImg'>
            <Helmet>
                <title>Ju&Go | Jurassic Islas</title>
            </Helmet>
            <Navigation />
            <div>
                <Bloc imgSrc="./Logo_JurassicIslas.png" isImgFirst={true} title="Jujurassic" />
                <Bloc imgSrc="./Logo_JueGo.png" title="Hugorassic" />
                <Bloc imgSrc="./Logo_JueGo.png" isImgFirst={true} />
                <Bloc imgSrc="./Logo_JurassicIslas.png" />
            </div>
            <Footer />
        </div>
    );
};

export default JurassicIslas;