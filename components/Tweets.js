import styles from './tweets.module.css';

export default function Tweets() {
    return (
        <div className={styles.tweets}>
            <div className={styles.tweetsContainer}>
                <h1 className={styles.headingOne}>Latest @Synthesis Tweets</h1>
                <h4 className={styles.headingFour}>( Rendered with getServerSideProps )</h4>
            </div>
        </div>

    );
}
