import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
};

export default function TitleAndMetaTags({
  url = 'https://mzpr.io',
  pathname,
  title = 'Jerome Ramos',
  description = 'JavaScript Engineer',
}: TitleAndMetaTagsProps) {
  const router = useRouter();
  const image = 'https://mzpr.io/me.jpeg';
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={`${url}${path}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@mouthzipperio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@mouthzipperio" />
    </Head>
  );
}