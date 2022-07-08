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
                        <Text />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='bloc'>
                    <div className='flexbox'>
                        <Img imgSrc={props.imgSrc} />
                        <Text />
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
                        <Text />
                        <Img imgSrc={props.imgSrc} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='bloc'>
                    <div className='flexbox'>
                        <Text />
                        <Img imgSrc={props.imgSrc} />
                    </div>
                </div>
            );
        }

    }
};

const Text = () => {
    return (
        <div className='textBloc'>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nesciunt quo perferendis, quos cum, nihil suscipit unde et possimus dolorem nobis maxime expedita architecto ea corrupti. Et magni quos modi illum iste velit harum molestias nesciunt consectetur eos architecto maiores quod soluta cumque, voluptatibus numquam sint repudiandae! Neque, aut voluptate.</p>
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