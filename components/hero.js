import BackgroundVideo from './BackgroundVideo';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <BackgroundVideo />
        </div>
    );
}
