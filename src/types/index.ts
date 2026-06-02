export interface SchoolInfo {
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  address: {
    street: string;
    city: string;
    district: string;
    state: string;
    pin: string;
  };
  contact: {
    phone: string[];
    email: string[];
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  leadership: {
    director: Person;
    principal: Person;
  };
}

export interface Person {
  name: string;
  designation: string;
  photo: string;
  message?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface AcademicLevel {
  id: string;
  title: string;
  description: string;
  classes: string;
  subjects?: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Campus" | "Classroom" | "Events" | "Sports" | "Celebrations";
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
  isNew: boolean;
  link?: string;
}

export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
}
