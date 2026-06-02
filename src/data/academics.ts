import { AcademicLevel } from "../types";

export const academicLevels: AcademicLevel[] = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    description: "Our pre-primary section focuses on play-based learning to develop foundational skills in a fun and engaging environment.",
    classes: "Play Group to U.K.G",
  },
  {
    id: "primary",
    title: "Primary School",
    description: "The primary years focus on building strong foundations in literacy, numeracy, and social skills through a balanced curriculum.",
    classes: "Class I to Class V",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer Science", "General Knowledge", "Art & Craft"],
  },
  {
    id: "middle",
    title: "Middle School",
    description: "We prepare our middle school students for higher academic challenges while encouraging critical thinking and independent learning.",
    classes: "Class VI to Class VIII",
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer Science", "Art & Craft"],
  },
];

export const teachingMethodology = [
  {
    title: "Student-Centric Learning",
    description: "Focusing on individual student needs and learning styles.",
  },
  {
    title: "Activity-Based Education",
    description: "Learning through doing, experiments, and projects.",
  },
  {
    title: "Modern Technology",
    description: "Integrating computer education from an early age.",
  },
];
