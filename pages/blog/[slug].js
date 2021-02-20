import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import marked from "marked"
import Layout from "../../components/layout"


const Post = ({ htmlString, data }) => {
  return (

    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
  const files = fs.readdirSync("posts");
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(path.join("posts", slug + ".md")).toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  };
};

export default Post;