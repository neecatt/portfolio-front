import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios";
import { TProject } from "../types/project.type";
import { TJob } from "../types/job.type";

export interface IHttpService {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T>;
  patch<T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T>;
  delete(url: string, config?: AxiosRequestConfig): Promise<void>;
}

export interface IApiService {
  getProjects(): Promise<TProject[]>;
  createProject(project: TProject): Promise<TProject>;
  updateProject(id: string, project: TProject): Promise<TProject>;
  deleteProject(id: string): Promise<void>;
  getExperiences(): Promise<TJob[]>;
  createExperience(experience: TJob): Promise<TJob>;
  updateExperience(id: string, experience: TJob): Promise<TJob>;
  deleteExperience(id: string): Promise<void>;
  updateResumeUrl(id: string, url: string): Promise<void>;
  getResumeUrl(id: string): Promise<{ link: string }>;
  uploadResume(id: string, file: File): Promise<{ link: string }>;
}

export class HttpService implements IHttpService {
  protected readonly api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private handleError(error: any, message: string): never {
    console.error(`${message}:`, error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(
        `${message}: ${(axiosError.response?.data as { message?: string })?.message || axiosError.message}`
      );
    }
    throw error;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.get<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error, `Failed to fetch data from ${url}`);
    }
  }

  async post<T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.api.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error, `Failed to create data at ${url}`);
    }
  }

  async patch<T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.api.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error, `Failed to update data at ${url}`);
    }
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<void> {
    try {
      await this.api.delete(url, config);
    } catch (error) {
      this.handleError(error, `Failed to delete data at ${url}`);
    }
  }
}

export class ApiService extends HttpService implements IApiService {
  constructor() {
    super(import.meta.env.VITE_APP_API_URL);
    this.api.interceptors.request.use((config) => {
      if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
      }
      return config;
    });
  }

  public async getProjects(): Promise<TProject[]> {
    return this.get<TProject[]>("/projects");
  }

  async createProject(project: TProject): Promise<TProject> {
    return this.post<TProject, TProject>("/projects", project);
  }

  async updateProject(id: string, project: TProject): Promise<TProject> {
    return this.patch<TProject, TProject>(`/projects/${id}`, project);
  }

  async deleteProject(id: string): Promise<void> {
    return this.delete(`/projects/${id}`);
  }

  public async getExperiences(): Promise<TJob[]> {
    return this.get<TJob[]>("/experience");
  }

  async createExperience(experience: TJob): Promise<TJob> {
    return this.post<TJob, TJob>("/experience", experience);
  }

  async updateExperience(id: string, experience: TJob): Promise<TJob> {
    return this.patch<TJob, TJob>(`/experience/${id}`, experience);
  }

  async deleteExperience(id: string): Promise<void> {
    return this.delete(`/experience/${id}`);
  }

  async updateResumeUrl(id: string, url: string): Promise<void> {
    return this.patch<void, { link: string }>(`/resume/${id}`, { link: url });
  }

  public async getResumeUrl(id: string): Promise<{ link: string }> {
    return this.get<{ link: string }>(`/resume/${id}`);
  }

  public async uploadResume(id: string, file: File): Promise<{ link: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.post<{ link: string }, FormData>(`/resume/${id}/upload`, formData);
  }
}

export const apiService = new ApiService();
