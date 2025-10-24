import { Avatar } from "@radix-ui/themes";
import { LinkButton } from "../ui/shadcn-io/button";
import { File } from "lucide-react";
import Icon from "../icons/icon";

export const Links = () => {
  return (
    <div className="flex h-full flex-col items-center gap-6 justify-center">
      <Avatar
        className="size-35 overflow-hidden rounded-full"
        src="/me.jpg"
        fallback="N"
      />
      <div className="flex flex-col gap-6 md:flex-row">
        <LinkButton
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          icon={<Icon.GitHub className="size-4" />}
          variant="outline"
          className="w-30"
        >
          GitHub
        </LinkButton>
        <LinkButton
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          icon={<Icon.LinkedIn className="size-4" />}
          variant="outline"
          className="w-30"
        >
          LinkedIn
        </LinkButton>
        <LinkButton
          href={"/neria_m_lister_cv.pdf"}
          icon={<File className="size-4" />}
          variant="outline"
          className="w-30"
          download="neria_m_lister_cv.pdf"
        >
          My CV
        </LinkButton>
      </div>
    </div>
  );
};
