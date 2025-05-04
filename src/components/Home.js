import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import Bloc from './Bloc';

const Home = () => {
    return (
        <>
            <div className='background'></div>
            <div className='content'>
                <Helmet>
                    <title>Ju&Go</title>
                </Helmet>
                <Navigation />
                <div>
                    <Bloc imgSrc="./LesDeuxFreres.jpg" isFramed={true} isImgFirst={true} title="Ju&Go"
                        text="Ju&Go est l'association de deux frères, Hugo et Julien, dont le but est de créer et de développer des jeux de sociétés.
                        Ju&Go mise principalement sur des jeux familiaux, stratégiques et amusants." />
                    <Bloc title="Ambitions"
                        text="A travers ses jeux, Ju&Go a pour objectif de créer des expériences mémorables, divertissantes et le plus important, amusantes.
                        Ju&Go a pour ambition de séduire et de convaincre les maisons d'éditions afin de voir ses jeux commercialisés. Et ainsi permettre au public de jouer aux expériences que 
                        Ju&Go leur propose." />
                    <Bloc imgSrc="./Logo_JueGo.png" title="L'origine du nom"
                        text="L'origine du nom Ju&Go est très simple, Ju pour le début de Julien et Go pour la fin de Hugo.
                        Anecdote linguistique, juego signifie jeu en espagnol. Comment faire mieux ?" />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;