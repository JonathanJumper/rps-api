import express from 'express';
import scoreServices from '../services/scoreServices';

const router = express.Router();

router.get('/api/v1/games', scoreServices.games);
router.post('/api/v1/games', scoreServices.addGame)

router.get('/api/v1/scores', scoreServices.scores);

export default router;