import styles from '../styles/GetInTouch.module.css';
import GetInTouchCard from './GetInTouchCard';
import Line from './Line';

const GetInTouch = () => {
  return (
    <div className={`${styles.container}`}>
      <span>GET IN TOUCH</span>
      <div>
        <GetInTouchCard />
        <GetInTouchCard />
        <GetInTouchCard />
        <GetInTouchCard />
      </div>
    </div>
  );
};

export default GetInTouch;
