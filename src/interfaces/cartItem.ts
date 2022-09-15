import IProduct from "./product";


interface ICartItem{
    count: number;
    product?: IProduct;
}

export default ICartItem;