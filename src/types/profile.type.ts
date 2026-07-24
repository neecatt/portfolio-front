export type TProfile = {
  id?: number;
  name: string;
  headline: string;
  intro: string;
  availability: string;
  skills: string[];
  socials?: Record<string, string> | null;
  seoTitle?: string;
  seoDescription?: string;
};
