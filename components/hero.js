import BackgroundVideo from './BackgroundVideo';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <BackgroundVideo />
            <div className={styles.heroText}>
                <h1>Where kids become problem solvers</h1>
            </div>
        </div>
    );
}
