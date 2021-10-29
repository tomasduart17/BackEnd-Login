import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { PrismaClient } from '@prisma/client'
import { GenerateToken } from '../../providers/generateToken'

interface IRequest {
    username: string;
    password: string;
}

class AuthenticateUserUseCase{

    async execute({username, password}: IRequest){

        const prisma = new PrismaClient()

        //Verificar se o usuario existe 

        const checkUser = await prisma.user.findUnique({
            where:{
                username
            }
        })

        if(!checkUser){
            throw new Error("Username or Password incorrect 1")
        }

        //Verificar a senha 

        const passwordMatch =  await compare(password, checkUser.password); 

        if(!passwordMatch){
            throw new Error("Username or Password incorrect 2")
        }

        // gerar token

        const token =  await GenerateToken(checkUser.id); 


        return { token, name: checkUser.name}

    }
}

export { AuthenticateUserUseCase }