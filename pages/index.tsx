import { GetStaticProps } from "next";
import React from "react";

import BackgroundImage from "../assets/svg/background.svg";
import Projects from "../components/cms/Projects";
import Link from "../components/input/Link";
import ScrollArrow from "../components/layout/ScrollArrow";
import Socials from "../components/layout/Socials";
import ContactSection from "../components/layout/section/ContactSection";
import ProcessSection from "../components/layout/section/ProcessSection";
import SectionHeader from "../components/layout/section/SectionHeader";
import SEO from "../components/util/SEO";
import { fetchProjects } from "../src/cms/content.server";
import { Project } from "../src/cms/types";

var someDynamicUrl = "https://twitch.tv/altidez";
var someText = "Twitch.TV/Altidez btw...";

export interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <SEO
        title="Home"
        description="Hey, I'm Altidez! Come on into my Humble Abode and take a look around. This is my portfolio, check it out!"
        keywords={[
          "altidez",
          "learning-developer",
          "streamer",
          "twitch",
        ]}
      />
      <div className="relative flex h-screen max-h-[80rem] min-h-[40rem] flex-col bg-gradient-to-bl from-gray-900 to-black">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <span className="text-2xl font-medium text-gray-300">
              Hey, I&apos;m
            </span>
            <h1 className="py-8 text-7xl font-medium text-white md:text-8xl">
              Altidez
            </h1>
            <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
              Twitch Streamer & New To Developing.
            <span className="text-xl leading-relaxed text-red-400 md:text-2xl md:leading-relaxed">
              ! Site Update Occuring Soon... !
              <span className="text-xl leading-relaxed font-bold text-gray-400 md:text-2xl md:leading-relaxed">
              <dd><a href={someDynamicUrl}>{someText}</a></dd>
              </span>
             </span>
            <Socials />
          </div>
          <BackgroundImage className="invisible absolute right-0 top-0 bottom-0 h-full lg:visible" />
        </header>
        <ScrollArrow />
      </div>
      <main className="scroll-my-20">
        <section
          id="projects"
          className="container m-auto scroll-my-20 py-8 md:py-12"
        >
          <div className="px-4">
            <SectionHeader
              title="What&apos;s Happening?"
              subtitle="Feel Free To Have A Quick Read Of Anything That Peaks Your Interest! 😀"
            />
          </div>
          <Projects projects={projects} />
        </section>
        <div className="h-20" />
      </main>
      <ContactSection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchProjects().then((projects) =>
    projects.filter((project) => project.featured)
  );

  return {
    props: { projects },
  };
};
