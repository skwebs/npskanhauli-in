import PageHeader from "@/components/shared/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Gallery",
  description: "View the latest photos and memories of National Public School, Kanhauli.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Glimpses of NPS" 
        description="Explore the vibrant life at National Public School through our image gallery."
      />
      <GalleryGrid />
    </div>
  );
}
