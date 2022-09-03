import Head from "next/head";

export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
}

export default function SEO(props: SEOProps) {
  const { title, description, keywords } = props;
  return (
    <Head>
      <title>{title} | Altifics Humble Abode</title>

      <meta name="author" content="Altific" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Altific's Humble Abode" />
      <meta property="og:image" content="/assets/logo/256x.png" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="@altific" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/assets/logo/256x.png" />
    </Head>
  );
}
