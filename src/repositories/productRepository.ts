import prisma from "../database/db.js";

async function getProducts() {
    const arrProducts = [];
    const data = await prisma.products.findMany({
    where: {},
    include: {
        category: true,
        size: true
    },     
});
for(let i = 0; i < data.length; i++){
    const product = {
        nome: data[i].name,
        "preço": data[i].price,
        foto: data[i].picture,
        tipo: data[i].category.name,
        tamanho: data[i].size.name
     }
     arrProducts.push(product);
} 
    return arrProducts;        
}

const productRepository = {
    getProducts
}

export default productRepository;