import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import FeaturedTours from "@/components/sections/featured-tours";
import PopularDestinations from "@/components/sections/popular-destinations";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <FeaturedTours />
      <PopularDestinations />
      <Testimonials />
      <Footer />
    </>
  );
}