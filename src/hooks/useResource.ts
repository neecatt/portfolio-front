import { useState } from "react";

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

export interface IResourceService<T> {
  getAll(): Promise<T[]>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<void>;
}

export function useResource<T>(
  resourceService: IResourceService<T>,
  resourceName: string
) {
  const [state, setState] = useState<ApiResponse<T[]>>({
    data: null,
    error: null,
    loading: false,
  });

  const fetchAll = async (): Promise<T[] | null> => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const data = await resourceService.getAll();
      setState((prev) => ({ ...prev, data, error: null, loading: false }));
      return data;
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: `Failed to fetch ${resourceName}`,
        loading: false,
      }));
      return null;
    }
  };

  const create = async (item: T): Promise<T | null> => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await resourceService.create(item);
      setState((prev) => ({
        data: prev.data ? [...prev.data, data] : [data],
        error: null,
        loading: false,
      }));
      return data;
    } catch (error) {
      setState((prev) => ({
        ...prev,
        data: prev.data,
        error: `Failed to create ${resourceName}`,
        loading: false,
      }));
      throw error;
    }
  };

  const update = async (
    id: string,
    item: T,
    idField: keyof T = "id" as keyof T
  ): Promise<T | null> => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const data = await resourceService.update(id, item);
      setState((prev) => ({
        data: prev.data
          ? prev.data.map((resource) =>
              resource[idField] === data[idField] ? data : resource
            )
          : [data],
        error: null,
        loading: false,
      }));
      return data;
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: `Failed to update ${resourceName}`,
        loading: false,
      }));
      throw error;
    }
  };

  const remove = async (
    id: string,
    idField: keyof T = "id" as keyof T
  ): Promise<void> => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      await resourceService.delete(id);
      setState((prev) => ({
        data: prev.data
          ? prev.data.filter((resource) => resource[idField] !== Number(id))
          : null,
        error: null,
        loading: false,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: `Failed to delete ${resourceName}`,
        loading: false,
      }));
      throw error;
    }
  };

  return {
    state,
    fetchAll,
    create,
    update,
    remove,
  };
}
