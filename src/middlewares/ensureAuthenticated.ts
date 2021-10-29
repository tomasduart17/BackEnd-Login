import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticated( request: Request, response: Response, next: NextFunction){ 
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message: "Token is missing 1"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token,"0896c374-4113-45f7-8059-dffd332660fa") 

        return next(); 
    } catch (error) {
        return response.status(401).json({
            message: "Token is missing 2"
        })
    }


}