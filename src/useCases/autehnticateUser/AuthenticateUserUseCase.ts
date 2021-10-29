import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IRequest {
    username: string;
    password: string;
}

class AuthenticateUserUseCase{

    async execute({username, password}: IRequest){
        //Verificar se o usuario existe 

        if(username != "tomas12"){
            throw new Error("Username or Password incorrect")
        }

        //Verificar a senha 

        const passwordMatch =  await compare(password, "$2a$08$/eE8OdnliPKwxdBRAGnmhO6WSAb46WDCDgixDrmar6W0BQr.ppuOa"); 

        if(!passwordMatch){
            throw new Error("Username or Password incorrect")
        }

        // gerar token

        const token =  sign({}, "0896c374-4113-45f7-8059-dffd332660fa", {
            subject: "2", 
            expiresIn: "20s"
        }); 


        return { token }

    }
}

export { AuthenticateUserUseCase }