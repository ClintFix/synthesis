import styles from './originStory.module.css';

export default function OriginStory() {
    return (
        <div className={styles.origin}>
            <div className={styles.originContainer}>
                <h1 className={styles.headingOne}>Origin Story</h1>
                <p className={styles.originText}>
                    Six years ago, Elon Musk asked me to start an experimental school with him at SpaceX.
                    <br />
                    <br />
                    The goal was to develop students who are enthralled by complexity and solving for the unknown.
                    <br />
                    <br />
                    Synthesis is the most innovative learning experience from that school. It is designed to cultivate student voice, strategic thinking, and collaborative problem solving.
                </p>
            </div>
        </div>
    );
}
