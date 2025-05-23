import { SiDiscord as Discord, SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { Link } from "@remix-run/react";
import { SquareArrowOutUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { PACKAGE_ICONS, PACKAGE_NAMES } from "#util/data";
import { type PackageName, availablePackages } from "#util/extractor";
import { LINKS } from "#util/links";

const Package = ({
  packageName,
}: {
  packageName: PackageName;
}) => {
  const name = PACKAGE_NAMES[packageName];
  const Icon = PACKAGE_ICONS[packageName];

  return (
    <Link
      className="flex w-full items-center justify-between rounded-md border border-zinc-700 bg-transparent p-4 transition-colors hover:bg-zinc-800"
      to={`/docs/${packageName}`}
    >
      <span className="flex items-center gap-2 font-extrabold">
        <Icon className="size-5 shrink-0 text-indigo-500" />
        {name}
      </span>
      <SquareArrowOutUpRight className="size-5 shrink-0 text-zinc-400" />
    </Link>
  );
};

const SocialLink = ({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) => (
  <Link
    className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm transition-colors hover:bg-zinc-800"
    target={"_blank"}
    to={to}
  >
    {children}
  </Link>
);

export default () => (
  <div className="flex h-dvh w-full flex-col items-center justify-center">
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-6">
        {availablePackages.map((packageName) => (
          <Package key={packageName} packageName={packageName} />
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
        <SocialLink to={LINKS.GitHub}>
          <GitHub className="size-5 shrink-0" />
          GitHub
        </SocialLink>
        <SocialLink to={LINKS.Discord}>
          <Discord className="size-5 shrink-0" />
          Discord
        </SocialLink>
      </div>
    </div>
  </div>
);
