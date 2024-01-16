import { Router } from 'express';

import { ordersControllers } from '../controllers';

const router = Router();
router.get('/', ordersControllers.getAll);

export default router;