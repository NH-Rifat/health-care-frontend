import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
}
