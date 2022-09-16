import { useState, useEffect } from "react";


type propsType = {
    className?: string,
    images: string[]
}
const Gallery = ({ images, className }: propsType): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const rand = Math.ceil(Math.random() * 13342) % 999;
    for (let i = images.length; i < 4; i++) {
        images.push(`https://picsum.photos/200/200?random=${rand + i}`);
    }

    useEffect(()=>{
        setSelectedImage(images[0]);
    }, [images])

    function isSelected(image: string) { return image === selectedImage };
    return (
        <div className={"flex flex-col md:h-80 " + className}>
            <img className="object-contain mx-auto rounded-xl w-9/12 md:w-full" src={selectedImage} />

            <div className="columns-4 mt-5">
                {
                    images.map(image =>
                        <img
                            className={`mx-auto rounded-lg w-full cursor-pointer ${isSelected(image) ? 'selected' : ''}`}
                            src={image}
                            onClick={() => setSelectedImage(image)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;