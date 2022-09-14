import mainImage from '../../assets/images/image-product-1.jpg';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

type propsType = {
    className?: string,
    images: string[]
}
const Gallery = ({ images, className }: propsType): JSX.Element => {
    const rand = Math.ceil(Math.random() * 13342) % 999;

    return (
        <div className="flex flex-col h-80 ">
            <img className="object-contain mx-auto rounded-xl" src={images[0]} />

            <div className="columns-4 mt-5">
                <img className="mx-auto rounded-lg selected w-full" src={images[0]} />
                <img className="mx-auto rounded-lg w-full" src={`https://picsum.photos/200/200?random=${rand + 1}`} />
                <img className="mx-auto rounded-lg w-full" src={`https://picsum.photos/200/200?random=${rand + 2}`} />
                <img className="mx-auto rounded-lg w-full" src={`https://picsum.photos/200/200?random=${rand + 3}`} />
            </div>
        </div>
    )
}

export default Gallery;