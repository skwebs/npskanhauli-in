import PageHeader from "@/components/shared/PageHeader";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for National Public School, Kanhauli.",
};

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader 
        title="Terms and Conditions" 
        description="Guidelines and rules for students, parents, and visitors."
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing our website or enrolling at {schoolInfo.name}, you agree to abide by these Terms and Conditions and our school's code of conduct.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">2. Academic Conduct</h2>
            <p className="text-slate-600 mb-4">Students are expected to maintain high standards of discipline and academic integrity:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Regular attendance is mandatory as per school guidelines.</li>
              <li>Completion of assignments and participation in assessments is required.</li>
              <li>Respectful behavior towards faculty, staff, and fellow students.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">3. Fee Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              School fees must be paid within the stipulated deadlines. Late payments may attract penalties or lead to suspension of services as per school management decisions. Fees once paid are generally non-refundable except under specific circumstances outlined in the admission guide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">4. Use of Website</h2>
            <p className="text-slate-600 leading-relaxed">
              The content on this website is for informational purposes only. Unauthorized use of the website's material, including logos and images, is strictly prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">5. Amendments</h2>
            <p className="text-slate-600 leading-relaxed">
              {schoolInfo.name} reserves the right to modify these terms and conditions or school policies at any time. Changes will be updated on the website or communicated through official channels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">6. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These terms are governed by the laws of India and the jurisdiction of courts in Vaishali, Bihar.
            </p>
          </section>
          
          <p className="text-sm text-slate-400 mt-12 italic">
            Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
