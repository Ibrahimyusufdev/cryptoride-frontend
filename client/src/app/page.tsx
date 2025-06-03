
import { Hero } from "./LandingPage/components/Hero";
import { WhyChooseUs } from "./LandingPage/components/WhyChoosUs";
import { HowItWorks } from "./LandingPage/components/HowItWorks";
import { GetStarted } from "./LandingPage/components/GetStarted";
import { Footer } from "./LandingPage/components/Footer";
export default function LandingPage() {
  return (
    <div className="scroll-smooth">
        <main>
            <Hero />
            <WhyChooseUs />
            <HowItWorks />
            <GetStarted />
            <Footer />
        </main>
    </div>
  );
}
