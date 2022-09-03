import React from "react";

import TwitterLogo from "../assets/svg/logo/fa-twitter.svg";
import AtIcon from "../assets/svg/logo/heros-at.svg";
import SEO from "../components/util/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Contact"
        description="Wanna talk or get something off your chest? Find ways to contact me on this page!"
        keywords={[
          "altific",
          "upcoming-developer",
          "contact",
        ]}
      />
      <div className="relative flex h-screen min-h-[40rem] flex-col bg-gradient-to-bl from-gray-900 to-black">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <h1 className="py-8 text-7xl font-medium text-white md:text-8xl">
              Contact
            </h1>
            <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
              Wanna talk or get something off your chest? Let&apos;s talk!
            </span>
            <ul className="flex flex-row gap-8">
              <li>
                <a
                  className="my-8 block font-bold text-white transition-colors hover:text-indigo-400"
                  href="mailto:business@altific.net"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AtIcon className="mr-3 inline h-4 w-4" />
                  Throw me an Email
                </a>
              </li>
              <li>
                <a
                  className="my-8 block font-bold text-white transition-colors hover:text-indigo-400"
                  href="https://twitter.com/altific"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TwitterLogo className="mr-3 inline h-4 w-4" />
                  Message on Twitter
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
