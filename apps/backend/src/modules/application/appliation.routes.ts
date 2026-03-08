import { Router } from 'express';
import * as applicationController from './application.controller';

const router: ReturnType<typeof Router> = Router();

router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getApplicationById);
router.post('/applications', applicationController.createApplication);
router.patch('/applications/:id/hire-status', applicationController.updateApplicationHireStatus);
router.delete('/applications/:id', applicationController.deleteApplication);

export default router;
