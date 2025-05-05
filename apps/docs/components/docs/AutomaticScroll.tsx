import { useLocation } from "@remix-run/react";
import { type ReactNode, useEffect } from "react";
import { ClientOnly } from "remix-utils/client-only";

const ScrollToElement = ({
  children,
}: {
  children: ReactNode;
}) => {
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

  return children;
};

export const AutomaticScroll = ({
  children,
}: {
  children: ReactNode;
}) => <ClientOnly>{() => <ScrollToElement>{children}</ScrollToElement>}</ClientOnly>;
