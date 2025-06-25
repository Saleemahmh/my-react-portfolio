
import styles from './Contact.module.css';
import linkedinImg from '../../assets/contact/linkedinIcon.png';
import emailImg from '../../assets/contact/emailIcon.png';
import githubImg from '../../assets/contact/githubIcon.png'

export const Contact = () => {
  return (
   <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={emailImg} alt="email icon" className={styles.linkImg}/>
            <a href="mailto:ssaleemah24@gmail.com">ssaleemah24@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={linkedinImg} alt="linkedin icon" className={styles.linkImg}/>
            <a href="https://www.linkedin.com/in/saleemah-muhyedeen-73180a113/">linkedin.com/in/saleemah-muhyedeen</a>
        </li>
        <li className={styles.link}>
            <img src={githubImg} alt="email icon" className={styles.linkImg}/>
            <a href="https://github.com/Saleemahmh">github.com/Saleemahmh</a>
        </li>

    </ul>
   </footer>
  )
}
