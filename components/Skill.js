import styles from '../styles/Skill.module.css';
import skill_blank from '../assets/Skill_blank.svg';
import Image from 'next/image';

const Skill = () => {
  return (
    <>
      <div>
        <p className={`title`}>Name</p>
        <div className={`${styles.skill_icons}`}>
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
          <Image className={`${styles.skill_icon}`} src={skill_blank} alt="Skill" />
        </div>
      </div>
    </>
  );
};

export default Skill;
