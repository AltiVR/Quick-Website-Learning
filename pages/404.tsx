import Link from "next/link";
import React from "react";

import SEO from "../components/util/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Err_Not_Found"
        description="Requested Page Doesn't Exist..."
        keywords={[
          "altific",
          "upcoming-developer",
        ]}
      />
      <div className="relative flex h-screen min-h-[40rem] flex-col bg-gradient-to-bl from-gray-900 to-black">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <h1 className="py-8 text-7xl font-medium text-white md:text-8xl">
              ERR_404
            </h1>
            <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
              Bleep Bloop Beep Boop Bam Bap BOOM... POW! We tried our best but the requested page it... it just no longer exists. Maybe: Take a look at the navigation bar?
            </span>
            <Link href="/" passHref>
              <a className="my-8 block text-xl font-bold text-white transition-colors hover:text-indigo-400">
                Take me back Home!
              </a>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
