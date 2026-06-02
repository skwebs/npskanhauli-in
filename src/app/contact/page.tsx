import PageHeader from "@/components/shared/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with National Public School, Kanhauli. We are here to help you with any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Get in Touch" 
        description="Have questions? We're here to help. Reach out to us via phone, email, or by visiting our campus."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-12">
               <div>
                 <SectionHeader 
                   title="Contact Details" 
                   subtitle="Information" 
                   description="Visit us or reach out through any of our contact channels."
                   centered={false}
                   className="mb-8"
                 />
                 <ContactInfo />
               </div>
               
               <div className="bg-surface rounded-card p-10 border border-slate-100 h-full">
                  <h3 className="text-2xl font-black text-primary mb-6">Our Location</h3>
                  <div className="aspect-video w-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-slate-200 flex items-center justify-center relative group">
                    {/* Placeholder for Google Maps */}
                    <div className="text-center p-8">
                       <p className="text-slate-500 font-bold mb-4">Google Maps View</p>
                       <p className="text-sm text-slate-400">Map will be integrated in Phase 2</p>
                    </div>
                    <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
                  </div>
               </div>
            </div>
            
            <div className="lg:pt-20">
               <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
