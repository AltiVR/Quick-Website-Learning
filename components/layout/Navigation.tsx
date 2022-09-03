import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import Avatar from "../../public/assets/logo/256x.png";
import Link from "../input/Link";

export default function Navigation() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-4 py-6 transition-all duration-500",
        scroll && "bg-background shadow-2xl"
      )}
    >
      <noscript>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-background shadow-2xl" />
      </noscript>
      <div className="container mx-auto flex flex-row items-center gap-6">
        <NextLink href="/" passHref>
          <a className="mr-2 block overflow-clip rounded-full leading-[0]">
            <Image
              src={Avatar}
              width={32}
              height={32}
              className="align-middle"
              alt="Altific"
              priority
            />
          </a>
        </NextLink>
        <Link href="/">Home</Link>
        <Link href="/happening">What&apos;s Happening?</Link>
        <Link href="https://docs.altific.net/" target="_blank">
          Docs
        </Link>
        <Link href="https://profile.altific.net/" target="_blank">
          Profile
        </Link>
        <Link href="https://pronouns.altific.net/" target="_blank">
          Pronouns
        </Link>
        <div className="grow" />
        <NextLink href="/contact" passHref>
          <a
            role="button"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Contact
          </a>
        </NextLink>
      </div>
    </nav>
  );
}
