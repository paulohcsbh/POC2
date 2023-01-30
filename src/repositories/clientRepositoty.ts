import prisma from "../database/db.js";

async function getClients(){
    return  await prisma.clients.findMany();
}

async function getClient(id: number){  
    return await prisma.clients.findUnique({
        where: { id }
    })
}

async function getClientByCPF(cpf:string){
    const data =  await prisma.clients.findFirst({
        where:{ cpf }
    })
    
    return data;
}

async function getClientByEmail(email:string){
    const data =  await prisma.clients.findFirst({
        where:{ email }
    })
    
    return data;
}

async function createClient(name: string, cpf: string, email: string){
    await prisma.clients.create({
        data: {
            name,
            cpf,
            email
        }
    })

}


const clientRepository = {
    getClients,
    getClient,
    createClient,
    getClientByCPF,
    getClientByEmail
}

export default clientRepository;