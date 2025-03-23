import { useState } from 'react';
import { apiService } from '../services/api.service';
import { TJob } from '../types/job.type';
import { TProject } from '../types/project.type';

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

export function useApi() {
  const [experiencesState, setExperiencesState] = useState<ApiResponse<TJob[]>>({
    data: null,
    error: null,
    loading: false
  });

  const [projectsState, setProjectsState] = useState<ApiResponse<TProject[]>>({
    data: null,
    error: null,
    loading: false
  });

  const fetchExperiences = async () => {
    setExperiencesState(prev => ({ ...prev, loading: true }));
    try {
      const data = await apiService.getExperiences();
      setExperiencesState(prev => ({ ...prev, data, error: null, loading: false }));
      return data;
    } catch (error) {
      setExperiencesState(prev => ({
        ...prev,
        error: 'Failed to fetch experiences',
        loading: false
      }));
      return null;
    }
  };

  const fetchProjects = async () => {
    setProjectsState(prev => ({ ...prev, loading: true }));
    try {
      const data = await apiService.getProjects();
      setProjectsState(prev => ({ ...prev, data, error: null, loading: false }));
      return data;
    } catch (error) {
      setProjectsState(prev => ({
        ...prev,
        error: 'Failed to fetch projects',
        loading: false
      }));
      return null;
    }
  };

  const createExperience = async (experience: TJob) => {
    setExperiencesState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await apiService.createExperience(experience);
      setExperiencesState(prev => ({
        data: prev.data ? [...prev.data, data] : [data],
        error: null,
        loading: false
      }));
      return data;
    } catch (error) {
      setExperiencesState(prev => ({
        ...prev,
        data: prev.data,
        error: 'Failed to create experience',
        loading: false
      }));
      throw error;
    }
  };

  const createProject = async (project: TProject) => {
    setProjectsState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await apiService.createProject(project);
      setProjectsState(prev => ({
        data: prev.data ? [...prev.data, data] : [data],
        error: null,
        loading: false
      }));
      return data;
    } catch (error) {
      setProjectsState(prev => ({
        ...prev,
        data: prev.data,
        error: 'Failed to create project',
        loading: false
      }));
      throw error;
    }
  };

  const updateExperience = async (id: string, experience: TJob) => {
    setExperiencesState(prev => ({ ...prev, loading: true }));
    try {
      const data = await apiService.updateExperience(id, experience);
      setExperiencesState(prev => ({
        data: prev.data
          ? prev.data.map(exp => (exp.id === data.id ? data : exp))
          : [data],
        error: null,
        loading: false
      }));
      return data;
    } catch (error) {
      setExperiencesState(prev => ({
        ...prev,
        error: 'Failed to update experience',
        loading: false
      }));
      throw error;
    }
  };

  const updateProject = async (id: string, project: TProject) => {
    setProjectsState(prev => ({ ...prev, loading: true }));
    try {
      const data = await apiService.updateProject(id, project);
      setProjectsState(prev => ({
        data: prev.data
          ? prev.data.map(proj => (proj.id === data.id ? data : proj))
          : [data],
        error: null,
        loading: false
      }));
      return data;
    } catch (error) {
      setProjectsState(prev => ({
        ...prev,
        error: 'Failed to update project',
        loading: false
      }));
      throw error;
    }
  };

  const deleteExperience = async (id: string) => {
    setExperiencesState(prev => ({ ...prev, loading: true }));
    try {
      await apiService.deleteExperience(id);
      setExperiencesState(prev => ({
        data: prev.data ? prev.data.filter(exp => exp.id !== Number(id)) : null,
        error: null,
        loading: false
      }));
    } catch (error) {
      setExperiencesState(prev => ({
        ...prev,
        error: 'Failed to delete experience',
        loading: false
      }));
      throw error;
    }
  };

  const deleteProject = async (id: string) => {
    setProjectsState(prev => ({ ...prev, loading: true }));
    try {
      await apiService.deleteProject(id);
      setProjectsState(prev => ({
        data: prev.data ? prev.data.filter(proj => proj.id !== Number(id)) : null,
        error: null,
        loading: false
      }));
    } catch (error) {
      setProjectsState(prev => ({
        ...prev,
        error: 'Failed to delete project',
        loading: false
      }));
      throw error;
    }
  };

  const updateResumeUrl = async (id: number, url: string) => {
    try {
      await apiService.updateResumeUrl(id.toString(), url);
      return true;
    } catch (error) {
      console.error('Failed to update resume URL:', error);
      throw error;
    }
  };

  const getResumeUrl = async (id: string) => {
    try {
      const data = await apiService.getResumeUrl(id);
      return data.link;
    } catch (error) {
      console.error('Failed to fetch resume URL:', error);
      return null;
    }
  };

  return {
    experiencesState,
    projectsState,
    fetchExperiences,
    fetchProjects,
    createExperience,
    createProject,
    updateExperience,
    updateProject,
    deleteExperience,
    deleteProject,
    updateResumeUrl,
    getResumeUrl
  };
}