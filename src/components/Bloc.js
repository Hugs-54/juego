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
        <div>
            <p className='textBloc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, consectetur quia, deleniti molestiae pariatur, officiis id incidunt unde illo porro accusantium! Eaque corrupti, atque quas molestias placeat velit nemo debitis? Dolorum accusantium quaerat iusto quis id porro adipisci qui voluptatem quibusdam? In, quasi nobis odit harum nulla dolore enim saepe, distinctio libero corporis molestias, omnis asperiores quas ex officia. Dolor reprehenderit autem laborum dolore quasi unde, consectetur impedit corporis, itaque obcaecati vitae architecto voluptate iure corrupti harum? Praesentium, itaque beatae? Veritatis, aperiam laborum vel sint vero veniam necessitatibus debitis quae itaque, repudiandae corporis voluptas hic commodi animi totam quo dolorem obcaecati modi dignissimos? Molestias ducimus voluptate eveniet iure atque numquam quia doloribus, vero vitae repellendus distinctio recusandae iste laboriosam quas commodi autem voluptates quidem ratione molestiae id aliquam quos assumenda praesentium? Architecto id minima ullam aliquam mollitia tempora aliquid ad hic laudantium? Qui accusantium quidem mollitia dolorem libero? Aut laudantium sunt dolorum nobis veritatis ullam placeat fugiat tenetur, eligendi ipsam cum ea tempore, ratione unde saepe voluptatum atque eaque quasi voluptates laborum in molestias blanditiis fuga tempora. Omnis, reiciendis nostrum quod iusto asperiores dolorem explicabo consequuntur similique, sed suscipit blanditiis exercitationem temporibus error unde quasi ut voluptatum facilis quidem cum?</p>
        </div>
    )
}

const Img = (props) => {
    return (
        <div>
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