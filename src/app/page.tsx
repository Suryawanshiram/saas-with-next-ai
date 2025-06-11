import Cta from "@/components/atoms/CTA";
import CompanionList from "@/components/molecules/CompanionList";
import CompanionCard from "@/components/organisms/CompanionCard";
import { recentSessions } from "@/constants";

export default function Home() {
  return (
    <main className="flex w-full h-full p-4 gap-4 max-w-7xl mx-auto flex-col">
      <h1 className="text-2xl font-bold">Popular Companions</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Networks of the Brains"
          subject="Neuroscience"
          duration={45}
          color="#a91d54"
        />
        <CompanionCard
          id="124"
          name="Robotic the Tech Guru"
          topic="AI and Robotics"
          subject="Computer Science"
          duration={30}
          color="#1d54a9"
        />
        <CompanionCard
          id="125"
          name="Luna the Space Explorer"
          topic="Astrophysics and Space Travel"
          subject="Astrophysics"
          duration={60}
          color="#54a91d"
        />
      </section>

      {/* Responsive section for CTA + CompanionList */}
      <section className="w-full flex flex-col lg:flex-row gap-4">
        <div className="block lg:hidden order-2 ">
          <Cta />
        </div>
        <div className="block lg:hidden order-3">
          <CompanionList
            title="Recently completed Sessions"
            companions={recentSessions}
          />
        </div>
        <div className="hidden lg:flex w-full justify-between gap-4 order-1">
          <Cta />
          <CompanionList
            title="Recently completed Sessions"
            companions={recentSessions}
            className="w-2/3 max-lg:w-full"
          />
        </div>
      </section>
    </main>
  );
}
