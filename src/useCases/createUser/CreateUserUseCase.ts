import { hash } from 'bcryptjs'


interface UserRequest{
    name: string;
    password: string;
    username: string;
}


class CreateUserUseCase {

    async execute({name, username, password}: UserRequest){

        // Verificar se o Usuario existe 

        if(username === "tomas1"){
            throw  new Error("User exist")
        }

        // Cadastras Usuario

        const passwordHash = await hash(password, 8); 


        return {name, username, passwordHash}
    }   

}

export { CreateUserUseCase }