import Github from '../assets/Github.svg';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={`display_flex_row ${styles.header}`}>
      <p className={styles.name}>Shubham Bakhal</p>
      <ul className={`display_flex_row ${styles.ul}`}>
        <a>Work</a>
        <a>About</a>
        <a>Now</a>
        <a>Blog</a>
        <a>Contact</a>
      </ul>
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
    </header>
  );
};

export default Header;
