import React from 'react';
import { Helmet } from 'react-helmet';
import Bloc from './Bloc';
import Footer from './Footer';
import Navigation from './Navigation';

const MonsterSnacks = () => {
    return (
        <div>
            <Helmet>
                <title>Ju&Go | Monster Snacks</title>
            </Helmet>
            <Navigation />
            <div>
                <Bloc imgSrc="./BattonDeCerumen.png" title="Monster Snacks"
                    text="Incarner un monstre à l'apétit immense, pour vous rassassier récoltez les snacks les plus savoureux du distributeur. 
                    Attention, vous devrez faire preuve d'observation et de stratégie pour les récupérer." />
              <Bloc title="Statut"
                    text="Les premiers tests sont en cours. L'élaboration des visuels est en cours également." />
            </div>
            <Footer />
        </div>
    );
};

export default MonsterSnacks;