import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import OriginStory from '../components/originStory';
import Tweets from '../components/sweets';
import Skills from '../components/skills';
import Footer from '../components/footer';

export async function getServerSideProps() {
  const res = await fetch("https://api.twitter.com/2/tweets/search/recent?query=from:chrismanfrank&max_results=15&tweet.fields=in_reply_to_user_id,public_metrics&user.fields=url", {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER}`
    }
  });
  const tweets = await res.json();
  return {
    props: {
      tweets
    }
  };
}

export default function Home({tweets}) {
  return (
    <>
      <Head>
        <title>Clint Fix | Synthesis School</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Hero />
      <div style={{height: '100px', overflow: 'hidden'}}>
        <div className={styles.diagonalOne}>hi</div>
      </div>
      <OriginStory />
      <div style={{height: '100px', overflow: 'hidden'}}>
        <div className={styles.diagonalTwo}>hi</div>
      </div>
      <Tweets tweets={tweets}/>
      <div style={{height: '100px', overflow: 'hidden'}}>
        <div className={styles.diagonalOne}>hi</div>
      </div>
      <Skills />
      <Footer />
    </>
  );
}
