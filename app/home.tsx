"use client";

import { buttonVariants } from "@/components/ui/shadcn-io/button";
import RotatingText from "@/components/ui/shadcn-io/rotating-text";
import TextType from "@/components/ui/TextType/TextType";
import { Handshake } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-12">
      <div className="flex flex-col gap-6">
        <div>
          <TextType
            text={["Hi there, I'm Neria Mordekhay Lister"]}
            typingSpeed={75}
            className="text-[clamp(2rem,5vw,3rem)] font-bold  max-w-6xl"
            pauseDuration={1500}
            cursorClassName="h-12"
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div>
          <span className="text-xl lg:text-2xl">
            <RotatingText
              staticText={
                <>
                  I&apos;m a{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Frontend developer
                  </span>{" "}
                  and also a call-to guy for
                </>
              }
              texts={[
                "CSS archaeology",
                "pixel-perfect chaos",
                "midnight UI polish",
                "CTO side quests",
                "DOM adventures",
                "refactor loops",
                "bug déjà vu",
                "team caffeine rituals",
                "existential PC talks",
                "design-system therapy",
                "git time travel",
              ]}
              rotatingTextClassName="md:px-2 md:bg-(--primary-color) md:text-black overflow-hidden py-0.5 sm:py-1 md:py-2 inline rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
          </span>
        </div>

        <div>
          <p>
            Previously worked at Makor Capital LTD and Radware LTD, mainly
            focused on developing solutions using React and NodeJS frameworks.
          </p>
        </div>
        <div>
          <p>Looking forward for my next adventure</p>
        </div>
        <div>
          <Link
            href="/links"
            className={buttonVariants({ variant: "default" })}
          >
            Let&apos;s talk
            <Handshake className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
