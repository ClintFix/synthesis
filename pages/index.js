import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
