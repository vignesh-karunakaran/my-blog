import React, { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import markedImages from 'marked-images';
import Layout from '../../components/layout';

/* eslint-disable react/no-danger */
const Post = ({ htmlString, data, isLive, gToken }) => {
  useEffect(() => {
    if(isLive) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){
        dataLayer.push(arguments)
      }
      gtag('js', new Date());
      gtag('config', gToken, { page_path: window.location.pathname });
      (function() {
      window.__insp = window.__insp || [];
      __insp.push(['wid', 960675955]);
      var ldinsp = function(){
      if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=960675955&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
      setTimeout(ldinsp, 0);
      })();
    }
  });
 
return (
    <>
    <Head>
      <title>{data.title}</title>
      <meta title="description" content={data.description} />
      <meta content="text/html; charset=UTF-8" name="Content-Type" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Vignesh Karunakaran" />
      <meta name="twitter:creator" content="@Vk3y3" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:card" content="summary" />
      { data.ogImg && <meta name="twitter:image" content={data.domainUrl + data.ogImg} /> }
      <meta property="og:url" content={data.ogUrl} />
      { data.ogImg && <meta property="og:title" content={data.title} /> }
      { data.ogImg && <meta property="og:description" content={data.description} /> }
      { data.ogImg && <meta property="og:image" content={data.domainUrl + data.ogImg} /> }
      { data.redirect && <meta httpEquiv="refresh" content={`0;url=${data.redirectionUrl}`} /> }
    </Head>
    <Layout>
      <div className="blog container">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </Layout>
  </>
 );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(path.join('posts', `${slug}.md`)).toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  marked.use(markedImages);
  const htmlString = marked(parsedMarkdown.content);
  const isLive = process.env.IS_LIVE || false;
  const gToken = process.env.ANALYTICS_TOKEN || null;
  parsedMarkdown.data.domainUrl = process.env.DOMAIN_URL ?  process.env.DOMAIN_URL : 'https://iamvignesh.dev/';
  parsedMarkdown.data.ogUrl = `${parsedMarkdown.data.domainUrl}writeup/${slug}`;
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
      isLive,
      gToken
    },
  };
};

export default Post;
