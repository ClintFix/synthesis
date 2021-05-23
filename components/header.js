import Image from 'next/image';
import styles from './header.module.css';

export default function Navigation() {
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Image
                    src="/images/clint_fix_logo.png"
                    alt="Clint Fix Logo Synthesis School"
                    width={60}
                    height={60}
                />
                <h1>Clint Fix</h1>
            </div>
        </div>
    );
}
