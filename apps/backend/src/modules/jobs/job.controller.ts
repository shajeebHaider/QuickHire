import { Request, Response, NextFunction } from 'express';
import * as jobService from './job.service';

export const getAllJobs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const job = await jobService.getJobById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    next(error);
  }
};

export const createJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, companyName, location, jobType, categoryId } = req.body;
    const newJob = await jobService.createJob({
      title,
      description,
      companyName,
      location,
      jobType,
      categoryId
    });
    res.status(201).json(newJob);
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    await jobService.deleteJob(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid job id' });
    }

    const { title, description, companyName, location, jobtype: jobType, categoryId } = req.body;

    const updatedJob = await jobService.updateJob(id, {
      title,
      description,
      companyName,
      location,
      jobtype: jobType,
      categoryId
    });

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(updatedJob);
  } catch (error) {
    next(error);
  }
};
