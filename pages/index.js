import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from "fs";
import Link from "next/link"
import Layout from "../components/layout"
import path from "path"
import matter from "gray-matter"

export default function Home({ slugs }) {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Vignesh Karunakaran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Space
        </h1>

        
          <div>
            {slugs.map(slug => {
              return (
                <div href="#" className={styles.card}>
                  <Link href={`/blog/${encodeURIComponent(slug.href)}`}><a>
                  <h3>{slug.title}</h3>
                  <p>{slug.desc}</p>
                  </a></Link>
                </div>
              );
            })}
          </div>
      </main>
    </div>
    </Layout>
  )
}
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts").map(filename => filename.replace(".md", ""));
  let data = [];
  let dataObj = {};
  files.forEach((postPath) => {
    let  markdownWithMetadata = fs.readFileSync(path.join("posts", postPath + ".md")).toString();
    let parsedMarkdown =  matter(markdownWithMetadata).data;
    dataObj.title = parsedMarkdown.title;
    dataObj.desc = parsedMarkdown.description;
    dataObj.href = postPath;
    data.push(dataObj);
  });
  return {
    props: {
      slugs: data
    }
  };
};