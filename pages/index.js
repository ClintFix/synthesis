import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OriginStory from '../components/OriginStory';
import Tweets from '../components/Tweets';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  const res = await fetch("https://api.twitter.com/2/tweets/search/recent?query=from:chrismanfrank&max_results=15&tweet.fields=in_reply_to_user_id,public_metrics&user.fields=url", {
    headers: {
      Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAIaKPwEAAAAAZu5h5AGr1ZJSWo1V6yhjSbYyl5Q%3DV4f1Mtk1ee3oJ9UCSUCQnwNAvwoLmu1fQzm7xajRM7YXLra7sb'
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
