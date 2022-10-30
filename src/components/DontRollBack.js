import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import Bloc from './Bloc';

const DontRollBack = () => {
    return (
        <div className='divDRB'>
            <Helmet>
                <title>Ju&Go | Don't Roll Back</title>
            </Helmet>
            <Navigation />
            <div>
                <Bloc title="Don't Roll Back"
                    text="Dans Don't Roll Back, vous êtes à la tête d'un parc d'attraction. Votre objectif est de construire le plus prestigieux des parcs. 
                    Vous allez devoir recruter les meilleurs assistants afin de gérer aux mieux vos ressources et obtenir les dernières nouveautés pour gagner en prestige.
                     Attention aux incidents qui pourront vous faire perdre argent et prestige. 
                     Vous pourrez reprendre la première place de cette course au prestige en thématisant votre parc et en convainquant le client mystère." />
                <Bloc title="Objectif"
                    text="Le jeu va s’articuler autour de la gestion de ressource et d’assistant tout en cherchant à laisser peu de place au hasard. 
                    Il vise un public qui veut s’essayer aux jeux experts sans pour autant être perdu dans des règles compliquées. 
                    Nous cherchons à avoir un jeu très agréable à jouer à deux joueurs et plus difficile à six." />
                <Bloc title="Statut"
                    text="Pour le moment, Don't Roll Back est au stade de développement. Le premier prototype est en cours de construction." />
            </div>
            <Footer />
        </div>
    );
};

export default DontRollBack;