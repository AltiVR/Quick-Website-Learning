import { GetStaticProps } from "next";
import React from "react";

import Posts from "../../components/cms/Posts";
import SEO from "../../components/util/SEO";
import { fetchPosts } from "../../src/cms/content.server";
import { Post } from "../../src/cms/types";

interface HappeningProps {
  posts: Post[];
}

export default function Happening({ posts }: HappeningProps) {
  return (
    <>
      <SEO
        title="What&apos;s Happening?"
        description="Welcome to my What&apos;s Happening Feed! There may be some interesting related posts for you view and enjoy!"
        keywords={[
          "altific",
          "upcoming-developer",
          "streamer",
          "streaming",
          "stream",
          "twitch",
          "content-creator",
          "happening",
        ]}
      />
      <header className="container m-auto px-4 pt-36 pb-16">
        <div className="lg:w-1/2">
          <h1 className="py-8 text-5xl font-medium text-white md:text-6xl">
            What&apos;s Happening?
          </h1>
          <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
            Please do have a look around and if you see anything that you wanna read, be my guest!
          </span>
        </div>
      </header>
      <main>
        <section id="posts" className="container mx-auto px-4">
          <Posts posts={posts} />
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // TODO: Pagination once the number of posts grow past 20 or so
  const posts = await fetchPosts().then((posts) =>
    posts.map((post) => ({
      ...post,
      body: null,
    }))
  );

  return {
    props: { posts },
  };
};
