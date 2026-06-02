import { SchoolInfo } from "../types";

export const schoolInfo: SchoolInfo = {
  name: "National Public School",
  shortName: "NPS Kanhauli",
  tagline: "Learning Today, Leading Tomorrow",
  location: "Sinhpur, Kanhauli, Vaishali, Bihar",
  address: {
    street: "Sinhpur, Kanhauli",
    city: "Kanhauli",
    district: "Vaishali",
    state: "Bihar",
    pin: "844101",
  },
  contact: {
    phone: ["+91 99342 77000", "+91 99342 77001"],
    email: ["info@npskanhauli.in", "admissions@npskanhauli.in"],
  },
  social: {
    facebook: "https://facebook.com/npskanhauli",
    youtube: "https://youtube.com/npskanhauli",
  },
  leadership: {
    director: {
      name: "Bipin Kumar Singh",
      designation: "Director",
      photo: "/images/staff/director.jpg",
      message: "At National Public School, we are committed to providing a nurturing environment that fosters academic excellence and character development. Our goal is to prepare students for the challenges of the future while keeping them grounded in our core values.",
    },
    principal: {
      name: "Soni Singh",
      designation: "Principal",
      photo: "/images/staff/principal.jpg",
      message: "Education is not just about books; it's about the holistic development of a child. We focus on building discipline, curiosity, and a love for learning in every student who walks through our doors.",
    },
  },
};

export const stats = [
  { label: "Years of Excellence", value: "26", suffix: "+" },
  { label: "Students Count", value: "500", suffix: "+" },
  { label: "Qualified Teachers", value: "25", suffix: "+" },
  { label: "Play Group to Class VIII", value: "I-VIII", suffix: "" },
];
