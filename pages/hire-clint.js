import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/HireClint.module.css';

export default function HireClint() {
    return (
        <>
            <Head>
                <title>Hire Clint | Synthesis School</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.hire}>
                <div className={styles.hireContainer}>
                    <h1 className={styles.headingOne}>It converted! 💪🏻</h1>
                    <p className={styles.hireText}>
                        But for real, I&apos;m excited that you took the time to check out my simple Next.js app. I built it to practice the framework and toy around with getServerSideProps. Overall, the framework seems fairly simple to grasp. 
                        <br />
                        <br />
                        I noticed a few things: 
                        <br />
                        <br />
                        It would have made more sense to use ISR for the Tweet data fetching (getStaticProps with the revalidate property). There&apos;s not much of a need to fetch Chrisman&apos;s tweets on every refresh. Every hour or even just once a day may have been a better choice.
                        <br />
                        <br />
                        I&apos;m excited to learn and try out more advanced features and learn exactly how Synthesis is using Next.js for their internal tooling and with Portal.
                        <br />
                        <br />
                        I&apos;m  looking forward to the next steps!
                    </p>
                    <Link href="/">
                        <a className={styles.backButton}>Home</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
