import { GalleryImage } from "../types";

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/campus-1.jpg",
    alt: "School Building",
    category: "Campus",
  },
  {
    id: "2",
    src: "/images/gallery/classroom-1.jpg",
    alt: "Students in Classroom",
    category: "Classroom",
  },
  {
    id: "3",
    src: "/images/gallery/sports-1.jpg",
    alt: "Annual Sports Day",
    category: "Sports",
  },
  {
    id: "4",
    src: "/images/gallery/event-1.jpg",
    alt: "Cultural Program",
    category: "Events",
  },
  {
    id: "5",
    src: "/images/gallery/celebration-1.jpg",
    alt: "Independence Day Celebration",
    category: "Celebrations",
  },
  {
    id: "6",
    src: "/images/gallery/campus-2.jpg",
    alt: "School Playground",
    category: "Campus",
  },
];

export const categories = ["All", "Campus", "Classroom", "Events", "Sports", "Celebrations"] as const;
