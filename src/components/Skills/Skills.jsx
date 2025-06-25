import React from 'react';
import styles from './Skills.module.css';
import {skills} from '../../data/skills';
import {certifications} from '../../data/certification';
export const Skills = () => {
  return (
   <section className={styles.container} id="skills">
    <h2 className={styles.title}>Skills/ Certifications</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
            {
                skills.map((skill,id) =>{
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })
            }
        </div>
        <ul className={styles.history}>
            {
                certifications.map((certification,id) => {
                    return(
                        <li key={id} className={styles.historyItem}>
                            <img src={certification.imageSrc} alt={certification.certificatename}/>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${certification.certificatename}, ${certification.institution}`}</h3>
                                <p>{`${certification.startDate} - ${certification.endDate}`}</p>
                                <ul >
                    {certification.skillslearnt.map((skilllearnt, id) => {
                      return <li key={id} className={styles.historyItemSkills}>{skilllearnt}</li>;
                    })}
                  </ul>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
   </section>
  )
}
