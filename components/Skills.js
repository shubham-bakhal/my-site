import Line from './Line';
import Skill from './Skill';
import styles from '../styles/Skills.module.css'


const Skills = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={`title`}>Skills</p>
        <div>
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>

      <Line />
    </>
  );
};

export default Skills;
