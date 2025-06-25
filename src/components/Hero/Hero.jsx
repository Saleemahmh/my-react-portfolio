
import styles from './Hero.module.css';
import heroImg from '../../assets/hero/heromyImage.png'

export const Hero = () => {
  return (
    <section className={styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title} > Hi! I am Saleemah</h1>
            <p className={styles.description}>I am an Entry-level MERN Stack Developer/ Front-End Developer, who possess skills working with ReactJS, JavaScript, HTML/CSS, NodeJs.
                Reach out if you would like to learn more.
            </p>
            <a href="mailto:ssaleemah24@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img className={styles.heroImage} src={heroImg} alt="hero image"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
