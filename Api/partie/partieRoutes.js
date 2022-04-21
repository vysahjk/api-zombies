import { Router } from 'express';
const router = new Router();

import { enregistrerPartie } from '../../controller/partie/sauvegarder';
import { getAllScores } from '../../controller/partie/scores'

router.post("/save", enregistrerPartie)
router.get('/scores', getAllScores)

export default router;