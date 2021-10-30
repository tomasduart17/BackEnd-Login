import { verify } from "jsonwebtoken"

export async function GetTokenID(token: string){
    verify(token, "0896c374-4113-45f7-8059-dffd332660fa", (err, decoded)=>{

        console.log(decoded);

        if (err) throw new Error("Token Not Valid"); 

        return decoded.userId
    })
}