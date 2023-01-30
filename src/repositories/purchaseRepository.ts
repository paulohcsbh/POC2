import prisma from "../database/db.js";

async function getPurchases(){
    const arrPurchases = [];
    const data = await prisma.purchases.findMany({
        where: {},
        include:{
            clients: true,
            products: true,
            state: true
        }        
    });
    for(let i = 0; i < data.length; i++){
        const product = {
            cliente: data[i].clients.name,
            produto: data[i].products.name,
            "status da compra": data[i].state.name,
            "data da compra": data[i].created_at,            
         };
         arrPurchases.push(product)
    }; 
    return arrPurchases;
}


const purchaseRepository = {
    getPurchases
}

export default purchaseRepository;
