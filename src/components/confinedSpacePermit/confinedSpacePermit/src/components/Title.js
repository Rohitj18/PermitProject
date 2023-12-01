import styles from "./Title.module.css";
import image from "../images/logo_header.png";
//import logo from "../../public/logo_header.png";
function Title() {
  return (
    <>
      <div></div>
      <div className={styles.title}>
        <div className={styles.position}>
          <img src={image} alt="IMAGE" />
        </div>
        <div>
          <h2 className={styles.color}>Confined Space Permit</h2>
        </div>
      </div>
      <div className={styles.title}>
        <div></div>
        <p className={styles.color}>To be used for confined space entry</p>
      </div>
    </>
  );
}

export default Title;
