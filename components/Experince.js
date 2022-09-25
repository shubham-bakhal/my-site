import styles from "../styles/Experince.module.css"
import Line from './Line'

const Experince = () => {
  return (
    <>
    <div className={styles.container}>
      <p className={`title`}>EXPERIENCE</p>
      <div>
        <p className={`heading title`}>Intern @Nirmitee.io</p>
        <p className={`title`}>
          A platform to Organize plasma donars and receivers where donars can
          list out their info and receivers can search for plasma donors by city
          name and can contact them
        </p>
      </div>
    </div>
    <Line />
    </>
  );
};

export default Experince;
