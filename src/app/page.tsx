import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicAcademyTestimonial from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from '@/components/Footer';
import MusicSchoolContactUs from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicAcademyTestimonial />
      <UpcomingWebinar />
      <Instructors />
      <MusicSchoolContactUs />
      <Footer />
    </main>
  );
}
