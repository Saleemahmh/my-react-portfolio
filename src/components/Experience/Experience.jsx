import React from 'react';
import styles from './Experience.module.css';
import experiences from '../../data/experience.json';

export const Experience = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
        <ul className={styles.exp}>
            {
                experiences.map((experience,id) => {
                    return(
                        <li key={id} className={styles.expItem}>
                            <img src={experience.imageSrc} alt="company image"/>
                            <div className={styles.expItemDetails}>
                                <h3>{`${experience.organisation}, ${experience.role}`}</h3>
                                <p>{`${experience.startDate} - ${experience.endDate}`}</p>
                                <ul >
                    {experience.experiences.map((experience, id) => {
                      return <li key={id} className={styles.expItemSkills}>{experience}</li>;
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
