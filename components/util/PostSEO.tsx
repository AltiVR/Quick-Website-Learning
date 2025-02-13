import Head from "next/head";

import { Post } from "../../src/cms/types";

export interface PostSEOProps {
  post: Omit<Post, "body">;
}

export default function PostSEO(props: PostSEOProps) {
  const { post } = props;
  return (
    <Head>
      <title>{post.title} | Altifics Humble Abode</title>

      <meta name="author" content="Altific" />
      <meta name="description" content={post.description} />
      <meta
        name="keywords"
        content={["altific", "happening", ...post.tags].join(", ")}
      />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:site_name" content="Altific's Humble Abode" />
      <meta
        property="og:image"
        content={post.thumbnail ?? "/assets/logo/256x.png"}
      />
      <meta property="og:updated_time" content={post.updated} />
      {post.tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}
      <meta property="article:published_time" content={post.created} />
      <meta property="article:modified_time" content={post.updated} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@altific" />
      <meta property="twitter:title" content={post.title} />
      <meta property="twitter:description" content={post.description} />
      <meta
        property="twitter:image"
        content={post.thumbnail ?? "/assets/logo/256x.png"}
      />
    </Head>
  );
}
