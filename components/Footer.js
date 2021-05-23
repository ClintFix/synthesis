import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.interestedContainer}>
                    <div className={styles.interested}>Interested?</div>
                    <Link href='/hire-clint' >
                        <a className={styles.hireButton}>Hire Clint</a>
                    </Link>
                </div>
                <div className={styles.footerLinks}>
                    <Image
                        src="/images/clint_fix_logo.png"
                        alt="Clint Fix Logo Synthesis School"
                        width={125}
                        height={125}
                    />
                    <div>
                        <h3>More About Clint</h3>
                        <a href="https://github.com/clintfix" alt="Clint Fix Github">Github</a>
                        <br />
                        <a href="https://linkedin.com/in/clintfix" alt="Clint Fix LinkedIn">LinkedIn</a>
                        <br />
                        <a href="https://twitter.com/clintfix" alt="Clint Fix Twitter">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
