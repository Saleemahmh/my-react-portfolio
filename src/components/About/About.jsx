
import styles from './About.module.css';
import AboutImg from '../../assets/about/aboutImg.png';
import CursorIcon from '../../assets/about/cursorIcon.png';
import ServerIcon from '../../assets/about/serverIcon.png';
import UiIcon from '../../assets/about/uiIcon.png';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={AboutImg} alt="about Image" className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={CursorIcon} alt="cursor icon" className={styles.aboutItemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Mern Stack Developer</h3>
                        <p>
                            I have developed skills to create a full fledged web application using MERN stack web development technologies.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={ServerIcon} alt="server icon" className={styles.aboutItemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Front-End Developer</h3>
                        <p>
                            I am Front-End developer with experience in building responsive and optimized sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={UiIcon} alt="ui icon" className={styles.aboutItemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Back-End Developer</h3>
                        <p>
                            I can also work as a Back-End Developer. Help in building optimized server operations and building APIs.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
