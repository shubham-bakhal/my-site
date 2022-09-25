import Image from 'next/image';
import blankImg from '../assets/blankImg.svg';
import styles from '../styles/Project.module.css';

const Project = () => {
  return (
    <>
      <div className={styles.Project}>
        <Image src={blankImg} alt="Plasma Donation" />
        <div>
          <p className={`title heading`}>Plasma donation</p>
          <p>
            A platform to Organize plasma donars and receivers where donars can
            list out their info and receivers can search for plasma donors by
            city name and can contact them
          </p>
          <p>
            A platform to Organize plasma donars and receivers where donars can
            list out their info and receivers can search for plasma donors by
            city name and can contact them
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
