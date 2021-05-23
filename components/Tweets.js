import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from './tweets.module.css';

export default function Tweets({tweets}) {
    const filteredTweets = tweets.data.filter(tweet => {
        if (!tweet.in_reply_to_user_id) {
            return tweet;
        }
    });
    console.log(filteredTweets);
    return (
        <div className={styles.tweets}>
            <div className={styles.tweetsContainer}>
                <h1 className={styles.headingOne}>Latest @Synthesis Tweets</h1>
                <h4 className={styles.headingFour}>( Rendered with getServerSideProps )</h4>
                <div className={styles.tweetFlex}>
                    {
                        filteredTweets.map(tweet => {
                            return <TwitterTweetEmbed key={tweet.id} tweetId={tweet.id} options={{
                                width: '310' 
                            }}/>;
                        })
                    }
                </div>
            </div>
        </div>

    );
}
