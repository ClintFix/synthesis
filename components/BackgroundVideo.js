import styles from './backgroundVideo.module.css';

export default function BackgroundVideo() {
    return (
        <div className={styles.backgroundVideo}>
            <video autoPlay muted loop>
                <source src="https://assets-global.website-files.com/5fd068558c772c0292e5f529/5fd15c96f42a2947b53c3d4d_stringtheory_loop-transcode.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}
