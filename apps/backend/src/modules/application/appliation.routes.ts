import { Router } from 'express';
import * as applicationController from './application.controller';

const router = Router();

router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getApplicationById);
router.post('/applications', applicationController.createApplication);
router.delete('/applications/:id', applicationController.deleteApplication);

export default router;
