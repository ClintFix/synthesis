import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.interestedContainer}>
                <div className={styles.interested}>Interested?</div>
                <div className={styles.hireButton}>Hire Clint</div>
            </div>
        </div>
    );
}
