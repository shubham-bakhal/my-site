import Github from '../assets/Github.svg';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={`display_flex ${styles.header}`}>
      <p className={styles.name}>Shubham Bakhal</p>
      <ul className={`display_flex ${styles.ul}`}>
        <a>Work</a>
        <a>About</a>
        <a>Now</a>
        <a>Blog</a>
        <a>Contact</a>
      </ul>
      <div className={`display_flex ${styles.profiles}`}>
        <a href="">
          <Image src={Github} alt="Picture of the author" />
        </a>
        <a href="">
          <Image src={Github} alt="Picture of the author" />
        </a>
        <a href="">
          <Image src={Github} alt="Picture of the author" />
        </a>
      </div>
    </header>
  );
};

export default Header;
