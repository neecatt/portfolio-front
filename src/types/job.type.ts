export type TJob = {
  id?: number;
  jobTitle: string;
  companyName: string;
  date: string;
  description: string[];
  latest: boolean;
  category?: string;
  sortOrder?: number;
  technologies?: string[];
  companyLink?: string;
};
