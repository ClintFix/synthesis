import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from './tweets.module.css';

export default function Tweets({tweets}) {
    console.log(tweets.data);
    return (
        <div className={styles.tweets}>
            <div className={styles.tweetsContainer}>
                <h1 className={styles.headingOne}>Latest @Synthesis Tweets</h1>
                <h4 className={styles.headingFour}>( Rendered with getServerSideProps )</h4>
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
            </div>
        </div>

    );
}
