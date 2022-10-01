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
                <Bloc imgSrc="./Logo_JurassicIslas.png" title="Jurassic Islas"
                    text="L’extravagant et riche PDG Julian Hugont, vous fait lègue d’un archipel d’îles au large du Costa Rica. 
                    Il compte sur vous pour construire, malgré toutes les difficultés, un parc de dinosaures. 
                    Dépêchez-vous de construire les plus beaux bâtiments et d'introduire les plus féroces des dinosaures afin d’accueillir le plus de visiteurs. 
                    Attention, les autres héritiers ne vous laisseront pas faire…" />
                <Bloc imgSrc="./cartesBatDinos.png" isImgFirst={true} title="Construisez"
                    text="Obtenez une île, choisissez bien car certaines pourraient se révéler dangereuses ! 
                    Récupérez des bâtiments et des dinosaures parmi une selection de presque 60 cartes uniques.
                    Construisez les bâtiments et les dinosaures selon votre stratégie, car attention aux attaques de vos adversaires.
                    Soyez le plus rapide et obtenez une inauguration digne de ce nom, mais retenez bien, c'est le parc avec le plus de visiteurs qui l'emporte !" />
                <Bloc imgSrc="./cartesDominations.png" title="Attaquez"
                    text="Ne laissez pas vos adversaires ouvrir le parc avant vous, attaquez pendant qu'il en est encore temps !
                    Munissez-vous des cartes Domination pour faire la différence. Ces cartes seront dévastatrices sur un parc non préparé.
                    N'oubliez pas de vous protéger avec certains bâtiments et des cartes Domination Défense." />
                <BlocVideo title="Présentation vidéo" />
                <Bloc title="Statut"
                    text="Après deux ans de développement, plusieurs versions du jeu et des heures de playstest et d'équilibrage, 
                    le jeu s'offre enfin un prototype final ; une version stable, équilibrée et surtout amusante. 
                    Actuellement, le jeu est envoyé vers les maisons d'éditions susceptibles d'être intéressées. Avec comme souhait, que Jurassic Islas
                    soit édité et commercialisé." />
            </div>
            <Footer />
        </div>
    );
};

export default JurassicIslas;