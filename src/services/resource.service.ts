import { apiService } from "./api.service";
import { TProject } from "../types/project.type";
import { TJob } from "../types/job.type";
import { IResourceService } from "../hooks/useResource";

export class ProjectService implements IResourceService<TProject> {
  async getAll(): Promise<TProject[]> {
    return apiService.getProjects();
  }

  async create(project: TProject): Promise<TProject> {
    return apiService.createProject(project);
  }

  async update(id: string, project: TProject): Promise<TProject> {
    return apiService.updateProject(id, project);
  }

  async delete(id: string): Promise<void> {
    return apiService.deleteProject(id);
  }
}

export class ExperienceService implements IResourceService<TJob> {
  async getAll(): Promise<TJob[]> {
    return apiService.getExperiences();
  }

  async create(experience: TJob): Promise<TJob> {
    return apiService.createExperience(experience);
  }

  async update(id: string, experience: TJob): Promise<TJob> {
    return apiService.updateExperience(id, experience);
  }

  async delete(id: string): Promise<void> {
    return apiService.deleteExperience(id);
  }
}

export const projectService = new ProjectService();
export const experienceService = new ExperienceService();
