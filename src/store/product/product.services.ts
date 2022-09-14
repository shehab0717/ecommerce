

import apiClient from "../../utils/apiClient";

export async function fetchAllProducts(){
    const products = await apiClient.get('/products');
    return products;
}