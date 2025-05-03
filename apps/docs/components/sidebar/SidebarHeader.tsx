import { SiDiscord as Discord, SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { Link } from "@remix-run/react";
import { LINKS } from "#util/links";

export const SidebarHeader = () => (
  <div className="flex items-center justify-between">
    <Link className="font-extrabold font-mono text-xl transition-opacity hover:opacity-50" to="/">
      Linkcord
    </Link>
    <div className="flex flex-row gap-2 *:transition-opacity *:hover:opacity-50">
      <Link target="_blank" to={LINKS.GitHub}>
        <GitHub className="size-5" />
      </Link>
      <Link target="_blank" to={LINKS.Discord}>
        <Discord className="size-5" />
      </Link>
    </div>
  </div>
);
