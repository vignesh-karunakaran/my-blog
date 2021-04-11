import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home({ slugs }) {
  return (
    <>
      <Head>
        <title>Vignesh Karunakaran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to Space</h1>

            <div>
              {slugs.map((slug) => (
                <div className={styles.card}>
                  <Link href={`/writeup/${encodeURIComponent(slug.href)}`}>
                    <a href>
                      <h3>{slug.title}</h3>
                      <p className={styles.date}>{slug.date}</p>
                      <p>{slug.desc}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts').map((filename) => filename.replace('.md', ''));
  const data = [];
  files.forEach((postPath) => {
    const dataObj = {};
    const markdownWithMetadata = fs.readFileSync(path.join('posts', `${postPath}.md`)).toString();
    const parsedMarkdownMeta = matter(markdownWithMetadata).data;
    dataObj.title = parsedMarkdownMeta.title;
    dataObj.desc = parsedMarkdownMeta.description;
    dataObj.date = parsedMarkdownMeta.date;
    dataObj.href = postPath;
    data.push(dataObj);
  });
  return {
    props: {
      slugs: data,
    },
  };
};
