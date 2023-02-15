import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import Bloc from './Bloc';

const UltimeVictime = () => {
    return (
        <div className='divUV'>
            <Helmet>
                <title>Ju&Go | Ultime Victime</title>
            </Helmet>
            <Navigation />
            <div>
                <Bloc imgSrc="./Logo_UltimeVictime.png" title="Ultime Victime"
                    text="Bienvenue à Bad-Horror City, dans la ville la plus dangereuse du monde, où s'affronte les plus grands tueurs du cinéma d'horreur dans une course à l'ultime victime.
                    En effet il ne reste plus qu'une seule victime à Bad-Horror City, mais le chemin ne sera pas simple pour tous pour l'atteindre.
                    Chaque grand tueur devra faire un choix entre avancer vers la victime ultime ou être encore plus horrible avec ses adversaires.
                    " />
                <Bloc imgSrc="./carteUltimeVictime.png" title="Principe"
                    text="Chaque joueur, représentant un grand tueur de film d'horreur, devra avancer son pion vers la case finale pour atteindre l'ultime victime. Le premier joueur arrivant à la fin remporte la partie et à le plaisir de tuer la dernière et ultime victime.
                    Pour se faire, chaque joueur disposera de carte sur lesquelles il devra faire un choix. Soit avancer vers l'ultime victime, soit ralentir et torturer les autres grands tueurs.
                    " />
                <Bloc imgSrc="./mainUltimeVictime.png" title="Statut"
                    text="Cartes et plateau sont créés et déjà édités. Nous testons actuellement ce jeu et réalisons les modifications selon les retours de tests." />
            </div>
            <Footer />
        </div>
    );
};

export default UltimeVictime;