import productRepository from "../repositories/productRepository.js"

async function getProducts(){
    const products = await productRepository.getProducts();
    return products
}

const productService = {
    getProducts
}
export default productService;