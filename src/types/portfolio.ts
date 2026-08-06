export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  demoVideo?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
  credential: string;
}
