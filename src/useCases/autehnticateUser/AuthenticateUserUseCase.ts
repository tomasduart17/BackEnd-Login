import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { PrismaClient } from '@prisma/client'

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

        const token =  sign({}, "0896c374-4113-45f7-8059-dffd332660fa", {
            subject: checkUser.id, 
            expiresIn: "20s"
        }); 


        return { token }

    }
}

export { AuthenticateUserUseCase }