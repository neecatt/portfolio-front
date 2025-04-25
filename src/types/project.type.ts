export type TProject = {
  id?: number;
  title: string;
  description: string;
  githubLink?: string;
  websiteLink?: string;
  techStack: Array<string | {id: number, name: string}>;
  category: 'AI' | 'Full-Stack' | {id: number, name: string};
};
