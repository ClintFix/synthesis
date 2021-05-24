import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from './tweets.module.css';

export default function Tweets({tweets}) {
    const filteredTweets = tweets.data.filter(tweet => {
        if (!tweet.in_reply_to_user_id) {
            return tweet;
        }
    });

    return (
        <div className={styles.tweets}>
            <div className={styles.tweetsContainer}>
                <h1 className={styles.headingOne}>Latest Chrisman Tweets (and RTs)</h1>
                <h4 className={styles.headingFour}>Fetched with getServerSideProps</h4>
                <div>
                    {
                        filteredTweets.map(tweet => {
                            return <TwitterTweetEmbed key={tweet.id} tweetId={tweet.id} options={{
                                align: "center"
                            }}/>;
                        })
                    }
                </div>
            </div>
        </div>

    );
}
