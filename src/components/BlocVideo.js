import React from 'react';

const Bloc = (props) => {

    return (
        <div className='bloc'>
            <div className='title'>
                <h1>
                    {props.title}
                </h1>
            </div>

            <div className='flexbox'>
                <div className='blocVideo'>
                    {/*<video controls > {/*poster='./Logo_JurassicIslas.png'}
                        <source src="./presensation_video_jurassic_islas.mp4" typeof='video/mp4' />
                        <p>Votre navigateur ne prend pas en charge les vidéos HTML5.
                            Voici <a href="./presensation_video_jurassic_islas.mp4">un lien pour télécharger la vidéo</a>.</p>
                    </video>*/}
                    <iframe title='video' className='videoYT'
                        src="https://www.youtube.com/embed/Cq6XeuDQ7YA">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Bloc;