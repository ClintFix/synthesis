import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div style={{height: '100px'}}>
        <div className={styles.diagonalOne}>hi</div>
      </div>
    </>
  );
}
