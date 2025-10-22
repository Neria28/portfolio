"use client";
export const About = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="w-full">
        <span className="text-xl lg:text-4xl text-(--primary-color)">
          Neria Mordekhay Lister
        </span>
      </div>
      <div className="mt-5 mb-5 flex flex-col gap-6">
        <p>
          I&apos;ve always been curious about how things work. As a kid, I loved
          taking apart my phone, my PSP, even my watch, just to see what was
          inside and how to put it back together. With both my brother and
          sister working in tech, it was probably only a matter of time before I
          joined the world of development myself.
        </p>
        <p>
          During COVID-19 pandemic, I decided to explore web development, and
          quickly discovered how much I enjoy solving problems, building
          systems, and creating seamless digital experiences from scratch.
        </p>
        <p>
          Today, I&apos;m a{" "}
          <span className="text-(--primary-color)">
            Full Stack Developer (frontend oriented) with 5 years
          </span>{" "}
          of experience building web applications end to end. I enjoy connecting
          all the dots - from UI to backend—to create complete, well -
          structured solutions. I&apos;ve worked across FinTech and
          Cybersecurity industries, in both startup and corporate environments,
          and I&apos;m known for identifying edge cases early and thinking
          through complex systems with a user-centric mindset.
        </p>
        <p>
          What drives me most is the blend of creativity, problem-solving, and
          continuous learning that development offers.
        </p>
      </div>
      <div className="mb-8 flex flex-col mt-10 gap-4">
        <h2 className="text-2xl font-bold">Career Experience</h2>
        <div className="flex flex-col">
          <ul className="list-disc space-y-4 px-5">
            <li>
              <span className="font-bold text-(--primary-color)">
                Radware: Sep 2024 - Oct 2025
              </span>{" "}
              <span className="text-xs text-gray-500">
                (On-site | Full-time )
              </span>
              <div className="flex flex-col gap-2">
                <p>
                  React | NodeJS | MongoDB | GCP | Kafka | BitBucket | Docker |
                  Kubernetes | Micro-frontend (React + NX Module Federation) |
                  Micro services architecture
                </p>
              </div>
            </li>
            <li>
              <span className="font-bold text-(--primary-color)">
                Makor Capital: Sep 2021 - Sep 2024
              </span>{" "}
              <span className="text-xs text-gray-500">
                (On-site | Full-time )
              </span>
              <div className="flex flex-col gap-2">
                <p>
                  React | NodeJS | MySQL Server | Redis | AWS (S3) | RabbitMQ |
                  GitHub | Jenkins
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
