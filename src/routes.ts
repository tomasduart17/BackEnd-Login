import { Router } from 'express'; 
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateUserController } from './useCases/autehnticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/createUser/CreateUserController';
import { RecoveryClientUserController } from './useCases/recoveryUserInfoClient/RecoveryClientUserController'; 


const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController(); 
const recoveryClientInfo = new RecoveryClientUserController(); 


router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.get("/courses", ensureAuthenticated,(request, response) => {
    return response.json([
        {id:1 , name:"NodeJS"}, 
        {id:2, name:"HTML"}
    ]);
})

router.post("/recoveryInfo", ensureAuthenticated, recoveryClientInfo.handle) 


export { router }