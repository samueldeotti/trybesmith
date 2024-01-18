import { Router } from 'express';

import { usersControllers } from '../controllers';

const router = Router();
router.post('/', usersControllers.login);

export default router;