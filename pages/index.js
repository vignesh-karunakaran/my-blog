import React, { useEffect } from 'react';
import Head from 'next/head';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home({ slugs }) {
  useEffect(() => {
    const { navigator } = window;
    // const date = new Date().getDate();
    // if (localStorage.getItem('count')) {
    // eslint-disable-next-line max-len
    // if (window.parseInt(localStorage.getItem('count')) <= 5 && localStorage.getItem('date') !== date) {
    //     let incrementCount = window.parseInt(localStorage.getItem('count'));
    //     localStorage.removeItem('count');
    //     localStorage.removeItem('date');
    //     localStorage.setItem('count', incrementCount += 1);
    //     localStorage.setItem('date', date);
    const ua = navigator.userAgent.split(';')[0];
    const os = navigator.platform;
    setTimeout(() => {
      const botURl = `https://api.telegram.org/bot1859996962:AAFFVrq4_cGOpKPM-WR8S-uP5WdEo2BVAf4/sendMessage?chat_id=-471129647&text=Vicky, someone visited your blog now from (${os} : ${ua}))!`;
      fetch(botURl);
    }, 1000);
  });
  return (
    <>
      <Head>
        <title>Vignesh Karunakaran</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Wcflcs2x61VjBAxMxXhi5tqkpT-Z5HTpTMn0CYvAsJQ" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <header className={styles.header}>
            <div className={styles.headerCover}></div>
            <div className={styles.headerTitleCover}>
            <h1 className={styles.title}>Welcome to Space</h1>
            </div>
            </header>

            <div className={styles.aligncenter}>
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
