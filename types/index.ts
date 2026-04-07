export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailImage: string;
  link: string | null;
  projectLink: string | null;
  paper: string | null;
  backgroundColor: string;
  projectDescription: string;
  motivation: string;
  howItWorks: string;
  technologies: {
    name: string;
    url: string;
  }[];
  slug: string;
}

export interface Experience {
  employer: string;
  jobTitle: string;
  description: string;
  accomplishments: string[];
  image: string;
  link: string;
  projectpage: null | string;
  backgroundColor: string;
  workTerm: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}
