import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <section>
        <div>
          <h2>Powerful Features to ace your carrer to diffferent levels</h2>
        </div>
      </section>
    </div>
  );
}
