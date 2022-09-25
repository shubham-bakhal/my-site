import styles from '../styles/Hero.module.css';
import Line from './Line';

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div></div>
        <p className={styles.heropara}>
          Hello👋, I am Shubham. I am a software developer based in Pune,India.
          Lorem ipsum when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <Line />
    </>
  );
};

export default Hero;
