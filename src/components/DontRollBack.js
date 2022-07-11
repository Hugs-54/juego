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
                    text="Dans Don't Roll Back, vous êtes à la tête d'un parc d'attraction. Votre objectif est de construire le plus présitigieux des parcs.
                    Pour être élu parc de l'année, attribuez des incidents à vos adversaires, recrutez des assistants, enchérissez sur les attractions, boutiques et
                    décors ; et le plus important, récupérez vos gains. Attention, dans cette course personne n'est réellement votre ami !" />
                <Bloc title="Status"
                    text="Pour le moment, Don't Roll Back est encore au stade d'idée. Aucun prototype n'est encore fait." />
            </div>
            <Footer />
        </div>
    );
};

export default DontRollBack;