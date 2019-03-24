import express from 'express';
import scoreServices from '../services/scoreServices';

const router = express.Router();

router.get('/api/v1/top', scoreServices.top);
router.get('/api/v1/last', scoreServices.last);

export default router;