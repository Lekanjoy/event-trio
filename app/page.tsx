import Header from "@/components/header";
import CTA from "@/components/landing-page/CTA";
import Discover from "@/components/landing-page/Discover-Services";
import Hero from "@/components/landing-page/Hero";
import RentalApp from "@/components/landing-page/RentalApp";
import Step from "@/components/landing-page/Step";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <main>
    <Header/>
    <Hero/>
    <Discover/>
    <RentalApp/>
    <Step/>
    <Testimonials/>
    <CTA/>
    </main>
  );
}
