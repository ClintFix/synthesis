import styles from './skills.module.css';

const skills = [
    "Javascript",
    "React",
    "Redux",
    "Next.js",
    "Node/Express",
    "SQL",
    "PostgreSQL",
    "Python",
    "Git/Github"
];

export default function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.skillsContainer}>
                <h1 className={styles.headingOne}>Skills</h1>
                <div className={styles.skillsList}>
                    {
                        skills.map(skill => <div className={styles.skill} key={skill}>{skill}</div>)
                    }
                </div>
            </div>
        </div>
    );
}
