import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicAcademyTestimonial from "@/components/TestimonialCards";
import { main } from "motion/react-client";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl  text-center ">Music Academy</h1> */}
      {/* importing hero section */}
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicAcademyTestimonial/>
      <UpcomingWebinar/>
      <Instructors/>
    </main>
  );
}
