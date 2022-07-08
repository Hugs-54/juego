import React from 'react';

const Bloc = (props) => {

    if (props.isImgFirst) {

        if (props.title) {
            return (
                <div className='bloc'>
                    <div className='title'>
                        <Title title={props.title} />
                    </div>

                    <div className='flexbox'>
                        <Img imgSrc={props.imgSrc} />
                        <Text text={props.text} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='bloc'>
                    <div className='flexbox'>
                        <Img imgSrc={props.imgSrc} />
                        <Text text={props.text} />
                    </div>
                </div>
            );
        }

    } else {

        if (props.title) {
            return (
                <div className='bloc'>
                    <div className='title'>
                        <Title title={props.title} />
                    </div>

                    <div className='flexbox'>
                        <Text text={props.text} />
                        <Img imgSrc={props.imgSrc} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='bloc'>
                    <div className='flexbox'>
                        <Text text={props.text} />
                        <Img imgSrc={props.imgSrc} />
                    </div>
                </div>
            );
        }

    }
};

const Text = (props) => {
    return (
        <div className='textBloc'>
            <p>
                {props.text}
            </p>
        </div>
    )
}

const Img = (props) => {
    return (
        <div className='divImg'>
            <img className='image' src={props.imgSrc} alt='Logo Ju&Go' />
        </div>
    )
}

const Title = (props) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default Bloc;