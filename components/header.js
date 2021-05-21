import styles from './header.module.css';

export default function Navigation() {
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <h1>Clint Fix</h1>
                <h1>Test Block</h1>
            </div>
        </div>
    );
}
