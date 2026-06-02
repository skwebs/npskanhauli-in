import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import NoticesPreview from "@/components/home/NoticesPreview";
import { Button } from "@/components/shared/Button";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <Introduction />
      <WhyChooseUs />
      <LeadershipPreview />
      <FacilitiesPreview />
      <NoticesPreview />
      <GalleryPreview />
      
      {/* Contact CTA Section */}
      <section className="py-28 bg-primary relative overflow-hidden">
        {/* Decorative elements for premium feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('/images/logo/logo.svg')] bg-no-repeat bg-center bg-[length:400px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Ready to give your child the <br className="hidden md:block" />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">best education?</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium opacity-90">
              Join the National Public School family and let your child experience a modern, safe, and excellence-driven learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="accent" size="lg" href="/contact" className="w-full sm:w-auto text-lg font-black px-12 py-8 rounded-xl shadow-2xl hover:scale-[1.02] transition-transform">
                Admissions Open 2026
              </Button>
              <Button variant="outline" size="lg" href="/about" className="w-full sm:w-auto text-lg font-black border-white/20 text-white hover:bg-white hover:text-primary px-12 py-8 backdrop-blur-sm rounded-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
