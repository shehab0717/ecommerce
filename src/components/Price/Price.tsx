
type props = {
    price: number,
    discount?: number,
    className?: string
}

const Price = ({ className, price, discount = 0 }: props): JSX.Element => {
    let afterDiscount = price - (price * discount) / 100;
    return (
        <div className={className}>
            <span className="text-2xl font-semibold">${afterDiscount.toFixed(2)}</span>
            <span className="ml-4 bg-paleOrange p-0.5 px-1.5 rounded text-orange font-semibold">{discount}%</span>
            <br />
            <span className="text-gray-400 text-md font-medium line-through mt-3 inline-block">${price.toFixed(2)}</span>
        </div>
    )
}

export default Price;