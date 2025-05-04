import { useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { ClientOnly } from "remix-utils/client-only";

const ScrollToElement = () => {
  const { hash: _hash } = useLocation();
  const hash = _hash.slice(1);

  useEffect(() => {
    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash]);

  return null;
};

export const AutomaticScroll = () => <ClientOnly>{() => <ScrollToElement />}</ClientOnly>;
