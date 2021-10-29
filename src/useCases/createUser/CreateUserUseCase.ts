import { hash } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'


interface UserRequest{
    name: string;
    password: string;
    username: string;
}






class CreateUserUseCase {

    async execute({name, username, password}: UserRequest){


        const prisma = new PrismaClient()

        // Verificar se o Usuario existe 


        const checkUser = await prisma.user.findUnique({
            where:{
                username
            }
        })


        if(checkUser){
            throw  new Error("User exist")
        }

        // Cadastras Usuario

        const passwordHash = await hash(password, 8); 

        const user = await prisma.user.create({
            data: {
                name, 
                username, 
                password: passwordHash, 
            }
        })




        return user; 
    }   

}

export { CreateUserUseCase }