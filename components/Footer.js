import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import Github from '../assets/Github.svg';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <p>Shubham Bakhal</p>
      <div className={`display_flex_row ${styles.profiles}`}>
        <a href="">
          <Image src={Github} alt="Github" />
        </a>
        <a href="">
          <Image src={Github} alt="Github" />
        </a>
        <a href="">
          <Image src={Github} alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
