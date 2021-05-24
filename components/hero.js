import Link from 'next/link';
import BackgroundVideo from './backgroundVideo';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <BackgroundVideo />
            <div className={styles.heroContainer}>
                <div className={styles.heroText}>
                    A person that
                    <br />
                    solves problems
                </div>
                <div className={styles.heroSubText}>
                    A hungry, resourceful, trustworthy developer
                    <br />
                    that is ready to build the future with Synthesis.
                </div>
                <Link href="/hire-clint">
                    <a className={styles.signUpButton}>Hire Clint</a>
                </Link>
            </div>
        </div>
    );
}
