import mainImage from '../../assets/images/image-product-1.jpg';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';
const Gallery = (): JSX.Element => {
    return (
        <div className="flex flex-col h-80 ">
            <img className="object-contain mx-auto rounded-xl" src={mainImage} />

            <div className="columns-4 mt-5">
                <img className="mx-auto rounded-lg selected" src={thumbnail1} />
                <img className="mx-auto rounded-lg" src={thumbnail2} />
                <img className="mx-auto rounded-lg" src={thumbnail3} />
                <img className="mx-auto rounded-lg" src={thumbnail4} />
            </div>
        </div>
    )
}

export default Gallery;