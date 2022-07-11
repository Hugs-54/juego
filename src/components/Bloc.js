import React from 'react';

const Bloc = (props) => {

    if (props.isImgFirst) {
        return (
            <div className='bloc'>
                <Title title={props.title} />

                <div className='flexbox'>
                    <Img imgSrc={props.imgSrc} />
                    <Text text={props.text} />
                </div>
            </div>
        );
    } else {
        return (
            <div className='bloc'>
                <Title title={props.title} />

                <div className='flexbox'>
                    <Text text={props.text} />
                    <Img imgSrc={props.imgSrc} />
                </div>
            </div>
        );
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
    if (props.imgSrc) {
        return (
            <div className='divImg'>
                <img className='image' src={props.imgSrc} alt='Logo Ju&Go' />
            </div>
        )
    } else {
        return ""
    }

}

const Title = (props) => {
    if (props.title) {
        return (
            <div className='title'>
                <h1>
                    {props.title}
                </h1>
            </div>

        )
    } else {
        return ""
    }

}

export default Bloc;