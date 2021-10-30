import { Request, Response } from 'express';
import { RecoveryClientUserUseCase } from './RecoveryClientUserUseCase'

class RecoveryClientUserController{
    async handle(request: Request, response: Response){
        const authToken = request.headers.authorization;

        if(!authToken){
            throw new Error("Token not exist")
        }

        const recoveryClientUser = new RecoveryClientUserUseCase();

        const idUser = await recoveryClientUser.execute(authToken);

        return response.json(idUser);
    }
}

export { RecoveryClientUserController }