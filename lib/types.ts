import { Timestamp } from "firebase/firestore";

export type BentoGridSize =
  | "col-span-1"
  | "col-span-2"
  | "row-span-1"
  | "row-span-2";

export interface UserProfile {
  name: string;
  title: string;
  email: string;
  whatsapp: string;
  location: string;
  bio: string;
  skills: {
    name: string;
    imageUrl: string;
  }[];
  socials: {
    imageUrl: string;
    linkUrl: string;
  }[];
}

export interface WorkExperience {
  role: string;
  description: string;
  imageUrl: string[];
  periodStart: Timestamp;
  periodEnd: Timestamp | null;
}

export interface CompanyExperience {
  company: string;
  imageUrl: string;
  location: string;
  type: "Remote" | "Office" | "Hybrid";
  periodStart: Timestamp;
  periodEnd: Timestamp | null;
  work: WorkExperience[];
}

export interface Education {
  institution: string;
  imageUrl: string;
  period: string;
  gpa: string;
  description: string;
  degree: string;
  activities: string[];
}
