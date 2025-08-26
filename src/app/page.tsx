import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { main } from "motion/react-client";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl  text-center ">Music Academy</h1> */}
      {/* importing hero section */}
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
