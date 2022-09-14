

import apiClient from "../../utils/apiClient";

export async function fetchAllProducts() {
    const products = await apiClient.get('/products');
    return products.data;
}

export async function fetOneProduct(productId: number) {
    const product = await apiClient.get(`/products/${productId}`);
    return product.data;
}