import { Router } from 'express';
import * as jobController from './job.controller';

const router = Router();

router.get('/jobs', jobController.getAllJobs);
router.get('/job/:id', jobController.getJobById);
router.post('/jobs', jobController.createJob);
router.patch('/job/:id', jobController.updateJob);
router.delete('/job/:id', jobController.deleteJob);

export default router;
