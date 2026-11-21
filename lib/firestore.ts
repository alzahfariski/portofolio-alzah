import { db } from "@/firebase/firebase.config";
import { collection, getDocs, query, limit, Timestamp, doc, getDoc } from "firebase/firestore";
import { UserProfile, CompanyExperience, Education, Project, ProjectDetail } from "./types";

const FIRESTORE_TIMEOUT_MS = 8000;

// Batasi waktu tunggu Firestore; bila lewat, tolak agar pemanggil memakai data kosong (fallback).
function withTimeout<T>(promise: Promise<T>, ms = FIRESTORE_TIMEOUT_MS): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`Firestore timeout setelah ${ms} ms`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

// Helper to serialize Firestore data (convert Timestamps to plain objects)
function serializeData(data: unknown): unknown {
  if (!data) return data;

  if (data instanceof Timestamp) {
    return {
      seconds: data.seconds,
      nanoseconds: data.nanoseconds,
    };
  }

  if (Array.isArray(data)) {
    return data.map(serializeData);
  }

  if (typeof data === 'object') {
    const serialized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data)) {
      serialized[key] = serializeData(value);
    }
    return serialized;
  }

  return data;
}

export async function getUserProfile(): Promise<UserProfile | null> {
  try {
    const q = query(collection(db, "profile"), limit(1));
    const querySnapshot = await withTimeout(getDocs(q));

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return serializeData(doc.data()) as UserProfile;
    }

    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

export async function getExperiences(): Promise<CompanyExperience[]> {
  try {
    const q = query(collection(db, "experiences"));
    const querySnapshot = await withTimeout(getDocs(q));

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => serializeData(doc.data()) as CompanyExperience);
    }

    return [];
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
}

export async function getEducation(): Promise<Education[]> {
  try {
    const q = query(collection(db, "educations"));
    const querySnapshot = await withTimeout(getDocs(q));

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => serializeData(doc.data()) as Education);
    }

    return [];
  } catch (error) {
    console.error("Error fetching education:", error);
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const q = query(collection(db, "projects"));
    const querySnapshot = await withTimeout(getDocs(q));

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((docSnapshot) => {
        const data = serializeData(docSnapshot.data()) as Project;
        return { id: docSnapshot.id, ...data };
      });
    }

    return [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectDetail(id: string): Promise<ProjectDetail | null> {
  try {
    const docRef = doc(db, "projectDetails", id);
    const docSnap = await withTimeout(getDoc(docRef));

    if (docSnap.exists()) {
      const data = serializeData(docSnap.data()) as ProjectDetail;
      return { id: docSnap.id, ...data };
    }

    return null;
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}
