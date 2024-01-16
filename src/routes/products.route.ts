import { Router } from 'express';

import { productsControllers } from '../controllers';

const router = Router();
router.get('/', productsControllers.getAll);
router.post('/', productsControllers.create);

export default router;