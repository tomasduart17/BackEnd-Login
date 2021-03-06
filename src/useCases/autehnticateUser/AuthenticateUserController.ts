import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController{

    async handle( request: Request, response: Response){
        const { username, password } = request.body; 

        const authenticatedUserUseCase = new AuthenticateUserUseCase();

        const { token,name } = await authenticatedUserUseCase.execute({
            username, 
            password,
        })


        return response.json({
            token, 
            name,
        }); 

    }
}


export { AuthenticateUserController }