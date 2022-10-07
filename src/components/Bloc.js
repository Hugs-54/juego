import React from 'react';

const Bloc = (props) => {

    if (props.isImgFirst) {
        return (
            <div className='bloc'>
                <Title title={props.title} />

                <div className='flexbox'>
                    <Img imgSrc={props.imgSrc} isFramed={props.isFramed} />
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
                    <Img imgSrc={props.imgSrc} isFramed={props.isFramed} />
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
        if (props.isFramed) {
            return (
                <div className='divImg'>
                    <img className='imageFramed' src={props.imgSrc} alt={props.imgSrc} />
                </div>
            )
        } else {
            return (
                <div className='divImg'>
                    <img className='image' src={props.imgSrc} alt={props.imgSrc} />
                </div>
            )
        }
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