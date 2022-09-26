import Line from './Line';
import styles from '../styles/Award.module.css';

const Award = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={`title`}>AWARDS & CERTIFICATIONS</span>
        <div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              2st in inter college coding competition CoDecode{' '}
            </span>
            <span className={`lightText`}>July 2022</span>
          </div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              1st in intra college coding competition held on CodinGame{' '}
            </span>
            <span className={`lightText`}>July 2022</span>
          </div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              1st at interview Bit and 2nd on Geeks For Geeks from my
              institution{' '}
            </span>
            <span className={`lightText`}>July 2022</span>
          </div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              Solved more than 450 DSA questions in total from various sites
            </span>
            <span className={`lightText`}>July 2022</span>
          </div>
        </div>
      </div>
      <Line />
    </>
  );
};

export default Award;
