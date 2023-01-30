import purchaseRepository from "../repositories/purchaseRepository.js";

async function getPurchases(){
    const purchases = await purchaseRepository.getPurchases();
    return purchases
}

const purchaseService = {
    getPurchases
}
export default purchaseService;