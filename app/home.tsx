"use client";

import RotatingText from "@/components/ui/shadcn-io/rotating-text";
import TypingText from "@/components/ui/shadcn-io/typing-text";

const Home = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-12">
      <div className="flex flex-col gap-6">
        <div>
          <TypingText
            text={["Hi there, I'm Neria Mordekhay Lister"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            className="text-6xl font-bold text-center max-w-6xl"
            cursorClassName="h-12"
            variableSpeed={{ min: 50, max: 120 }}
          />
        </div>
        <div>
          <span className="text-xl lg:text-2xl">
            <RotatingText
              staticText="I'm a Frontend developer and also a call-to guy for"
              texts={[
                "pixel-perfect imperfection",
                "unavoidable lame jokes",
                "microservice monoliths",
                "undocumentable documentation",
                "AI whispering",
                "debuggable bugs crafting",
              ]}
              rotatingTextClassName="md:px-2 md:bg-[var(--primary-color)] md:text-black overflow-hidden py-0.5 sm:py-1 md:py-2 inline rounded-lg"
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
            Previously worked as{" "}
            <span className="font-bold text-(--primary-color)">
              Frontend developer{" "}
            </span>
            at Radware LTD., mainly focused on developing solutions using React
            and NodeJS frameworks.
          </p>
        </div>
        <div>
          <p>Looking forward for my next adventure</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
