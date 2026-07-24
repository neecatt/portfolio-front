export type TProject = {
  id?: number;
  title: string;
  description: string;
  githubLink?: string;
  websiteLink?: string;
  techStack: Array<string | {id: number, name: string}>;
  category: 'AI' | 'Full-Stack' | {id: number, name: string};
  slug?: string;
  featured?: boolean;
  published?: boolean;
  sortOrder?: number;
  role?: string;
  challenge?: string;
  solution?: string;
  outcomes?: string[];
  metrics?: Record<string, string | number> | null;
  thumbnail?: string;
  media?: TProjectMedia[];
};

export type TProjectMedia = {
  id?: number;
  key: string;
  altText: string;
  sortOrder: number;
  kind?: string;
};
