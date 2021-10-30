import { GetTokenID } from '../../providers/getTokenId'; 

class RecoveryClientUserUseCase{

    async execute(token: string){
        const idUser = await GetTokenID(token);

        return idUser;
    }
}

export { RecoveryClientUserUseCase }