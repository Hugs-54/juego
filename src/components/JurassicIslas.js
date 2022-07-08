import React from 'react';
import { Helmet } from 'react-helmet';
import Bloc from './Bloc';
import BlocVideo from './BlocVideo';
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

                <Bloc imgSrc="./Logo_JurassicIslas.png" isImgFirst={true} title="Jujurassic" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque aliquid nam ea expedita libero excepturi repudiandae ut earum maiores!" />
                <Bloc imgSrc="./Logo_JueGo.png" title="Hugorassic" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque aliquid nam ea expedita libero excepturi repudiandae ut earum maiores!" />
                <Bloc imgSrc="./Logo_JueGo.png" isImgFirst={true} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque aliquid nam ea expedita libero excepturi repudiandae ut earum maiores!" />
                <Bloc imgSrc="./Logo_JurassicIslas.png" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque aliquid nam ea expedita libero excepturi repudiandae ut earum maiores!" />
                <BlocVideo title="Présentation vidéo" />
            </div>
            <Footer />
        </div>
    );
};

export default JurassicIslas;