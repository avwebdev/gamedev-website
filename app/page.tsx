import { MapPin } from "lucide-react";
import { SiGithub, SiGit, SiGodotengine } from "@icons-pack/react-simple-icons";
import Image from "next/image";

import GlitchAnimation from "@/components/GlitchAnimation";
import OfficerCard from "@/components/OfficerCard";
import { ContentSection } from "@/components/Section";

import GitLogoWhite from "@/public/logos/git-orange.svg";
import GodotLogoWhite from "@/public/logos/godot-white.svg";
import GitHubLogoBlack from "@/public/logos/github-black.svg";

export default function Home() {
  return (
    <main className="mx-auto ~sm/xl:~max-w-xl/6xl">
      <div className="relative p-5 pt-14 sm:pt-16 pb-14 lg:pb-24 xl:pb-32">
        <div className="font-tomorrow flex flex-col items-center gap-4 py-14 md:py-16 lg:py-36">
          <GlitchAnimation
            className="text-6xl font-semibold"
            text="AV Game Dev"
          />
          <h3 className="text-2xl font-medium">
            Building the future of game development
          </h3>
          <h4 className="text-xl flex gap-1">
            <MapPin /> Amador Valley HS - Pleasanton, California
          </h4>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 px-5">
        <GlitchAnimation
          className="text-4xl font-semibold font-tomorrow"
          text="About AV Game Dev"
        />
        <div className="flex flex-col items-center font-tomorrow w-full">
          <h3 className="text-3xl font-tomorrow font-medium">
            Why Join AV Web Dev?
          </h3>
          <ContentSection
            title="Learn"
            headline="Learn Skills"
            content={
              <div className="p-3 sm:p-10">
                <Image src={GitLogoWhite} alt="Git Logo White" className="w-2/5 floating" />
                <Image
                  src={GitHubLogoBlack}
                  alt="Github Logo Black"
                  className="invert w-2/5 mx-auto floating delay-200"
                />
                <Image src={GodotLogoWhite} alt="Godot Logo White" className="w-2/5 ml-auto floating delay-500" />
              </div>
            }
          >
            <div>
              <p>
                Master the essential tools used in the game development
                industry, including:
              </p>
              <ul className="list-disc pt-3 pl-5 flex flex-col gap-2">
                <li>
                  <div className="flex gap-2">
                    <SiGit /> Git – A powerful Version Control System (VCS) to
                    manage your project&lsquo;s code.
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    <SiGithub /> GitHub – A platform for collaboration, sharing,
                    and version control using Git.
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    <SiGodotengine /> Godot – A user-friendly, open-source game
                    engine for creating both 2D and 3D games.
                  </div>
                </li>
              </ul>
            </div>
          </ContentSection>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h3 className="font-tomorrow text-3xl font-medium">Officer Team</h3>
          <div className="flex flex-wrap items-start justify-center gap-6 *:max-w-32 sm:*:max-w-48">
            <OfficerCard
              name="Justin Mu"
              image="/officer-images/justin-mu.webp"
              position="President"
            />
            <OfficerCard
              name="Ryan Wang"
              image="/officer-images/ryan-wang.webp"
              position="Vice President"
            />
            <OfficerCard
              name="Hamza Khalilullah"
              image="/officer-images/hamza-khalilullah.webp"
              position="Treasurer"
            />
            <OfficerCard
              name="Andy Wang"
              image="/officer-images/andy-wang.webp"
              position="Instructor"
            />
            <OfficerCard
              name="Akarsh Singh"
              image="/officer-images/akarsh-singh.webp"
              position="Instructor"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
