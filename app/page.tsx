import Header from "@/components/header";
import Discover from "@/components/landing-page/Discover-Services";
import Hero from "@/components/landing-page/Hero";
import RentalApp from "@/components/landing-page/RentalApp";
import Step from "@/components/landing-page/Step";

export default function Home() {
  return (
    <main>
    <Header/>
    <Hero/>
    <Discover/>
    <RentalApp/>
    <Step/>
    </main>
  );
}
