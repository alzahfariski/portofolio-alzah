import { db } from "@/firebase/firebase.config";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { UserProfile, CompanyExperience, Education } from "./types";

export async function getUserProfile(): Promise<UserProfile | null> {
  try {
    const q = query(collection(db, "profile"), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return doc.data() as UserProfile;
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
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => doc.data() as CompanyExperience);
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
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => doc.data() as Education);
    }

    return [];
  } catch (error) {
    console.error("Error fetching education:", error);
    return [];
  }
}
