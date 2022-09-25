import Line from './Line';
import styles from '../styles/Projects.module.css';
import Project from './Project';

const Projects = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <p className={`title`}>PROJECTS</p>
        <div className={`${styles.container}`}>
          <Project />
          <Project />
        </div>
      </div>

      <Line />
    </>
  );
};

export default Projects;
