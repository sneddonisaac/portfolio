import Masonry from 'react-masonry-css'
import Container from '../../atoms/Container'

const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    425: 1,
}

export default function MasonryImageGrid(props) {
    return (
        <Container>
            {props.title && (
                <div className={'py-12 text-center md:text-left'}>
                    <h1 className={'font-satoshi-medium text-6xl'}>
                        {props.title}
                    </h1>
                </div>
            )}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {props?.images?.map((image) => (
                    <div key={image.id} className={'relative last:mb-0'}>
                        <img src={image.url} alt={image.alt} />
                        {image.title && (
                            <div
                                className={
                                    'absolute inset-0 flex items-center justify-center font-satoshi-bold text-3xl'
                                }
                            >
                                <h1>{image.title}</h1>
                            </div>
                        )}
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}
