

type propsType = {
    className?: string,
    images: string[]
}
const Gallery = ({ images, className }: propsType): JSX.Element => {
    const rand = Math.ceil(Math.random() * 13342) % 999;

    return (
        <div className={"flex flex-col h-80 " + className}>
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