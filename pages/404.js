import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <header className={styles.header}>
          <div className={styles.headerCover}></div>
          <div className={styles.headerTitleCover}>
            <h1 className={styles.title}>Page Not Found</h1>
            <Image src="/portal-gun.png" alt="Portal Gun" width="80" height="80" />
          </div>
          </header>
        </main>
      </div>
    </Layout>
  );
}
