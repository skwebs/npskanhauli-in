import PageHeader from "@/components/shared/PageHeader";
import SchoolOverview from "@/components/about/SchoolOverview";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import LeadershipPreview from "@/components/home/LeadershipPreview";

export const metadata = {
  title: "About Us",
  description: "Learn about the history, vision, and core values of National Public School, Kanhauli.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="About National Public School" 
        description="A legacy of excellence, a commitment to character, and a vision for the future of education."
      />
      <SchoolOverview />
      <VisionMission />
      <CoreValues />
      <LeadershipPreview />
      
      {/* Additional Quote Section */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight italic">
              &quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot;
            </h2>
            <div className="mt-8 w-20 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
