import React from "react";
import SectionHeader from "../shared/SectionHeader";

const SchoolOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our History & Legacy"
            subtitle="About NPS"
            centered={false}
          />
          <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
            <p className="font-medium text-primary text-xl">
              National Public School (NPS) was established with a clear vision: to bring high-quality, modern education to the children of Sinhpur, Kanhauli, and surrounding areas.
            </p>
            <p>
              From our humble beginnings, we have grown into a premier educational institution known for academic excellence and discipline. Our campus provides a safe and stimulating environment where students are encouraged to explore their interests and develop their talents.
            </p>
            <p>
              At NPS, we believe that education is the most powerful weapon which you can use to change the world. Our curriculum is designed to not only impart knowledge but also to build character, instill values, and prepare students for the global challenges of the 21st century.
            </p>
            <p>
              We are proud of our dedicated team of educators who work tirelessly to ensure that every student receives the support they need to succeed. Our student-centric approach ensures that learning is an enjoyable and life-long journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolOverview;
