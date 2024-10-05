import { MapPin } from "lucide-react";

import GlitchAnimation from "@/components/GlitchAnimation";
import OfficerCard from "@/components/OfficerCard";

export default function Home() {
  return (
    <main>
      <div className="relative p-5 text-white pt-14 sm:pt-16 pb-14 lg:pb-24 xl:pb-32">
        <div className="mx-auto ~sm/lg:~max-w-2xl/6xl">
          <div className="font-tomorrow flex flex-col items-center gap-4 py-14 md:py-16 lg:py-36">
            <GlitchAnimation className="text-6xl font-semibold" text="AV Game Dev" />
            <h3 className="text-2xl font-medium">
              Building the future of game development
            </h3>
            <h4 className="text-xl flex gap-1">
              <MapPin /> Amador Valley HS - Pleasanton, California
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mx-auto ~sm/xl:~max-w-xl/6xl py-10 px-5">
        <h2 className="font-tomorrow text-4xl font-medium">Officer Team</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 *:max-w-32 sm:*:max-w-48">
          <OfficerCard name="Justin Mu" image="/officer-images/justin-mu.webp" position="President" />
          <OfficerCard name="Ryan Wang" image="/officer-images/ryan-wang.webp" position="Vice President" />
          <OfficerCard name="Hamza Khalilullah" image="/officer-images/hamza-khalilullah.webp" position="Treasurer" />
          <OfficerCard name="Andy Wang" image="/officer-images/andy-wang.webp" position="Instructor" />
          <OfficerCard name="Akarsh Singh" image="/officer-images/akarsh-singh.webp" position="Instructor" />
        </div>
      </div>
    </main>
  );
}
