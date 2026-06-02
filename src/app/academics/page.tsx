import PageHeader from "@/components/shared/PageHeader";
import AcademicLevels from "@/components/academics/AcademicLevels";
import TeachingMethodology from "@/components/academics/TeachingMethodology";
import CoCurricular from "@/components/academics/CoCurricular";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";

export const metadata = {
  title: "Academics",
  description: "Explore the academic programs, teaching methodology, and co-curricular activities at National Public School.",
};

export default function AcademicsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Our Academic Excellence" 
        description="A balanced curriculum designed to foster academic rigor and holistic development."
      />
      <AcademicLevels />
      <TeachingMethodology />
      <FacilitiesPreview />
      <CoCurricular />
    </div>
  );
}
