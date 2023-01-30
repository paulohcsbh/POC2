import { Request, Response } from "express";
import clientService from "../services/clientService.js";

async function getAllClients(req: Request, res: Response){
    try{
        const clients = await clientService.getClients();
        return res.send(clients);
    }catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}
async function getOneClient(req: Request, res: Response){
    const clientId = parseInt(req.params.clientId);
    try{
        const client = await clientService.getClient(clientId);        
        return res.send(client);
    }catch(err){
        console.log(err);
        if(err.name === "NotFoundError"){
            return res.sendStatus(404);
        }        
    }
}

async function createNewClient(req: Request, res: Response){
    const {name, cpf, email} = req.body;
    try{
        await clientService.createClient(name, cpf, email);        
        return res.sendStatus(201);
    }catch(err){
        console.log(err);
        if(err.name === "ConflictError"){
            return res.sendStatus(409);
        }
        return res.sendStatus(500);
    }
}

const clientController = {
    getAllClients,
    getOneClient,
    createNewClient
}
export default clientController;