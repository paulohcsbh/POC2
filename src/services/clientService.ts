import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import clientRepository from "../repositories/clientRepositoty.js"

async function getClients(){
    const clients = await clientRepository.getClients();
    return clients
}

async function getClient(id: number){
    const client = await clientRepository.getClient(id);
    if(!client){
        throw notFoundError();
    }
    return client;
}

async function createClient(name: string, cpf: string, email: string){
    const clientCPF = await clientRepository.getClientByCPF(cpf);
    const clientEmail = await clientRepository.getClientByEmail(email);
    if(clientCPF && clientEmail){
        throw conflictError(`Cpf: ${cpf} and Email: ${email}already registred` )
    }
    if(clientCPF && !clientEmail){
        throw conflictError(`Cpf ${cpf} already registred` )
    }if(clientEmail && !clientCPF){
        throw conflictError(`Email ${email} already registred` )
    }
    await clientRepository.createClient(name, cpf, email)
}

const clientService = {
    getClients,
    getClient,
    createClient
} 
export default clientService;