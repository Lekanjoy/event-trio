import Header from "@/components/header";
import Contact from "@/components/landing-page/Contact";
import CTA from "@/components/landing-page/CTA";
import Discover from "@/components/landing-page/Discover-Services";
import FAQ from "@/components/landing-page/FAQ";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Journey from "@/components/landing-page/Journey";
import RentalApp from "@/components/landing-page/RentalApp";
import Step from "@/components/landing-page/Step";
import Team from "@/components/landing-page/Team";
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
    <Journey/>
    <Team/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </main>
  );
}
