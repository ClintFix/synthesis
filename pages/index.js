import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OriginStory from '../components/OriginStory';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div style={{height: '100px', overflow: 'hidden'}}>
        <div className={styles.diagonalOne}>hi</div>
      </div>
      <OriginStory />
      <div style={{height: '100px', overflow: 'hidden'}}>
        <div className={styles.diagonalTwo}>hi</div>
      </div>
    </>
  );
}
