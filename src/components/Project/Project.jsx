
import {projects} from '../../data/projects';
import styles from './Project.module.css';
import { ProjectCard } from './ProjectCard';

export const Project = () => {
  return (
   <section className={styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
        {
            projects.map((project,id) =>{
                return <ProjectCard key={id} project={project} />;
            })
        }
    </div>
   </section>
  )
}
