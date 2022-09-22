import React, { useEffect } from 'react';
import Head from 'next/head';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home({ slugs, isLive, gToken, TelegramBotToken }) {


  useEffect(() => {
      var welcomeNote = new SpeechSynthesisUtterance("Welcome");
      speechSynthesis.speak(welcomeNote);
        if(isLive) {
          const { navigator } = window;
          const ua = navigator.userAgent.split(';')[0];
          const os = navigator.platform;
          const from =  new URLSearchParams(window.location.search).get('from');
          let msg = `Vicky, someone visited your blog now from (${os} : ${ua}))!`;
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
          if(from) {
              msg = `Vicky, someone visited your blog now from (${os} : ${ua})) using ${from}!`;
          }
          setTimeout(() => {
            const botURl = `https://api.telegram.org/bot1859996962:${TelegramBotToken}/sendMessage?chat_id=-471129647&text=${msg}`;
            fetch(botURl);
          }, 1000);
        }
  },[]);

  return (
    <>
      <Head>
        <title>Vignesh Karunakaran</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Wcflcs2x61VjBAxMxXhi5tqkpT-Z5HTpTMn0CYvAsJQ" />
        <meta name="description" content="Personal blog by Vignesh Karunakaran" />
        <meta name="author" content="Vignesh Karunakaran" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VC6QSDP6M6"></script>
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
                slug.hide === false &&
                <div className={styles.card}>
                  <Link href={`/writeup/${encodeURIComponent(slug.href)}`}>
                    <a href>
                      <p className={styles.cardTitle}>{slug.title}</p>
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
  const isLive = process.env.IS_LIVE || false;
  const gToken = process.env.ANALYTICS_TOKEN || null;
  const TelegramBotToken = process.env.TELEGRAM_BOT_TOKEN || false;
  files.forEach((postPath) => {
    const dataObj = {};
    const markdownWithMetadata = fs.readFileSync(path.join('posts', `${postPath}.md`)).toString();
    const parsedMarkdownMeta = matter(markdownWithMetadata).data;
    dataObj.title = parsedMarkdownMeta.title;
    dataObj.desc = parsedMarkdownMeta.description;
    dataObj.date = parsedMarkdownMeta.date;
    dataObj.hide = parsedMarkdownMeta.hide;
    dataObj.href = postPath;
    data.push(dataObj);
  });
  return {
    props: {
      slugs: data,
      isLive,
      gToken,
      TelegramBotToken
    },
  };
};
