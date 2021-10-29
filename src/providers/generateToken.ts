import { sign } from "jsonwebtoken"


export async function GenerateToken(userId: string){

    const token =  sign({}, "0896c374-4113-45f7-8059-dffd332660fa", {
        subject: userId, 
        expiresIn: "1h"
    }); 

    return token; 

}