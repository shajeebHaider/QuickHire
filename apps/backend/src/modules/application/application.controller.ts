import { Request, Response, NextFunction } from "express";
import * as applicationService from "./application.service";

export const getAllApplications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const applications = await applicationService.getAllApplications();
    res.json(applications);
  } catch (error) {
    next(error);
  }
};

export const getApplicationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid application id" });
    }

    const application = await applicationService.getApplicationById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(application);
  } catch (error) {
    next(error);
  }
};

export const createApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      applicantName,
      applicantEmail,
      resumeLink,
      jobId,
      coverNote,
      expectedSalary,
    } = req.body;

    const newApplication = await applicationService.createApplication({
      applicantName,
      applicantEmail,
      resumeLink,
      jobId: Number(jobId),
      coverNote,
      expectedSalary: Number(expectedSalary),
    });

    res.status(201).json(newApplication);
  } catch (error) {
    next(error);
  }
};

export const deleteApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid application id" });
    }

    await applicationService.deleteApplication(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};


