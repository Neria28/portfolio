"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/shadcn-io/button";
export const About = () => {
  return (
    <div className="flex h-full flex-col lg:justify-center gap-6">
      <h1 className="mb-4 text-4xl font-bold text-(--primary-color)">
        Neria Mordekhay Lister
      </h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p>
            I&apos;ve always been curious about how things work. As a kid, I
            loved taking apart my phone, my PSP, even my watch, just to see what
            was inside and how to put it back together. With both my brother and
            sister working in tech, it was probably only a matter of time before
            I joined the world of development myself.
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
            of experience building web applications end to end. I enjoy
            connecting all the dots - from UI to backend - to create complete,
            well - structured solutions. I&apos;ve worked across FinTech and
            Cybersecurity industries, in both startup and corporate
            environments, and I love solving tricky problems and building things
            that feel good to use.
          </p>
          <p>
            What drives me most is the blend of creativity, problem-solving, and
            continuous learning that development offers.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Career Experience</h2>
          <div className="flex flex-col">
            <ul className="list-disc space-y-4 px-5">
              <li>
                <span className="font-bold text-(--primary-color)">
                  &quot;Radware&quot;: Sep 2024 - Oct 2025
                </span>{" "}
                <span className="text-xs text-gray-500">
                  (On-site | Full-time )
                </span>
                <div className="flex flex-col gap-2">
                  <p>
                    React | NodeJS | MongoDB | GCP | Kafka | BitBucket | Docker
                    | Kubernetes | Micro-frontend (React + NX Module Federation)
                    | Micro services architecture
                  </p>
                </div>
              </li>
              <li>
                <span className="font-bold text-(--primary-color)">
                  &quot;Makor Capital&quot;: Sep 2021 - Sep 2024
                </span>{" "}
                <span className="text-xs text-gray-500">
                  (On-site | Full-time )
                </span>
                <div className="flex flex-col gap-2">
                  <p>
                    React | NodeJS | MySQL Server | Redis | AWS (S3) | RabbitMQ
                    | GitHub | Jenkins
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <span>
            Sounds good? Then{" "}
            <Button
              variant="link"
              size="icon"
              className="inline-block w-fit items-center font-bold text-(--primary-color)"
            >
              <Link href="/links" className="inline-block">
                <div className="flex w-full items-center gap-2">
                  let&apos;s talk
                  <ExternalLink className="size-4" />
                </div>
              </Link>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
