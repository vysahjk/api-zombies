import { Router } from 'express';
const router = new Router();

import { enregistrerPlayer } from '../../controller/player/connexion';

router.post("/save", enregistrerPlayer)

export default router;