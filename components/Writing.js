import Line from './Line';
import styles from '../styles/Award.module.css';

const Writing = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={`title`}>WRITING</span>
        <div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              It has roots in a piece of classical Latin literature from 45 BC,{' '}
            </span>
            <span className={`lightText`}>July 2022, 6 min read</span>
          </div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s
            </span>
            <span className={`lightText`}>July 2022, 6 min read</span>
          </div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              when an unknown printer took a galley of type and scrambled it to
            </span>
            <span className={`lightText`}>July 2022, 6 min read</span>
          </div>
          <div className={`display_flex_col ${styles.award}`}>
            <span className={`title heading`}>
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia{' '}
            </span>
            <span className={`lightText`}>July 2022, 6 min read</span>
          </div>
        </div>
      </div>
      <Line />
    </>
  );
};

export default Writing;
