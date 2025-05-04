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
                <Bloc imgSrc="./Logo_UltimeVictime.png" title="Ultime Victime" isImgFirst={true}
                    text="Bienvenue à Bad-Horror City, dans la ville la plus dangereuse du monde, où s’affrontent les plus grands tueurs du cinéma d’horreur dans une course à l’ultime victime. En effet il ne reste plus qu’une seule et Ultime victime à Bad-Horror City ! Mais le chemin pour l’atteindre ne sera pas facile ! 
                    Chaque grand tueur devra avancer prudemment vers l’ultime Victime et devra être encore plus horrible avec ses adversaires pour y arriver ! 
                " />
                <Bloc imgSrc="./carteUltimeVictime_chucky.png" title="Principe"
                    text="Ultime Victime est un jeu où chaque joueur choisit méticuleusement la carte qui le fera avancer sur un plateau semé d’embuche et qui lui 
                    permettra de faire souffrir ses adversaires en même temps. Chaque carte infligera une contrainte à un joueur adverse basé sur les pires tortures 
                    de films d’horreur !" />
                
                <Bloc imgSrc="./carte_ultimevictime_annabelle.png" isImgFirst={true}
                text="Par exemple, la carte « Chucky » vous obligera à la vulgarité lorsque vous parlerez, ou la carte « Annabelle » vous imposera
                    un sourire diabolique ! Attention si vous ne respectez pas la contrainte, vous reculerez et vous vous éloignerez de l’Ultime Victime !" />
                
                <Bloc imgSrc="./carte_ultimevictime_tapaslaref.png" title="T’as pas la ref ?" 
                    text="Ultime Victime s’adresse autant aux amateurs du genre qu’aux plus peureux ! Pas besoin d’avoir vu les films pour y jouer. D’ailleurs, vous avez besoin de comprendre le lien entre une carte et son film ? Vous ne connaissez pas le film cité ? Pas de panique !
                    Scannez le QR-code de la carte « T’as pas la ref ? » pour découvrir les bandes annonces ou extraits faisant référence aux effets que vous ferez subir aux autres joueurs.
                    T’as pas le ref est disponible ici : https://qrco.de/ultimevictime
                    Ultime Victime propose également des cartes supplémentaires pour ceux qui aiment et connaissent l’univers du cinéma d’horreur.
                " />
                
                <Bloc imgSrc="./carte_ultimevictime.png" title="Informations" isImgFirst={true}
                    text={`Nombre de joueurs : 4 à 8 tueurs \n 
                    Temps : 30-60 minutes \n
                    Age minimum : 12 ans \n
                    Contenu : 71 cartes de jeu, 3 cartes Ultime Victime, 1 carte “T’as pas la ref ?”, une règle du jeu, 1 plateau de jeu, 8 pions, et 1 cimetière. \n
                    Accessoires effrayants et musique inquiétante sont recommandés.
                    `} />
            
                <Bloc imgSrc="./mainUltimeVictime.png" title="Statut"
                    text="Ultime Victime est sur sa finalisation après tests. Depuis décembre 2022, et quelques différentes versions 
                    avec de nombreux tests, retouches et ajustements, Ultime Victime est bientôt prêt à être proposé à l’édition. 
                    N’hésitez pas à nous contacter si ce projet vous intéresse !" />
            </div>
            <Footer />
        </div>
    );
};

export default UltimeVictime;