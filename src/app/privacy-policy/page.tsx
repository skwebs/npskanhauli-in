import PageHeader from "@/components/shared/PageHeader";
import { schoolInfo } from "@/data/school";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for National Public School, Kanhauli.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader 
        title="Privacy Policy" 
        description="How we handle and protect your data at National Public School."
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At {schoolInfo.name}, we are committed to protecting the privacy and security of our students, parents, and staff. This Privacy Policy outlines how we collect, use, and safeguard personal information provided to us through our website and administrative processes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Information We Collect</h2>
            <p className="text-slate-600 mb-4">We may collect personal information including but not limited to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Student names, dates of birth, and educational history.</li>
              <li>Parent/Guardian names, contact details, and addresses.</li>
              <li>Emergency contact information.</li>
              <li>Academic records and attendance data.</li>
              <li>Information provided through inquiry or admission forms.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">The information collected is used for:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Processing admissions and student registrations.</li>
              <li>Communicating academic progress and school updates.</li>
              <li>Ensuring the safety and well-being of students on campus.</li>
              <li>Maintaining administrative records and compliance.</li>
              <li>Sending newsletters or event invitations (with consent).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. Access to sensitive information is restricted to authorized personnel only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions regarding this Privacy Policy or our data practices, please contact us at <a href={`mailto:${schoolInfo.contact.email[0]}`} className="text-secondary hover:underline">{schoolInfo.contact.email[0]}</a>.
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
