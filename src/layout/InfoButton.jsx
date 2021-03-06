import info_button from "assets/info_button.png";
import close_button from "assets/x_button.png";

import styles from "./InfoButton.module.css";

const InfoButton = ({ type, id, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {type === "info" && <img id={id} src={info_button} alt="info" />}
      {type === "close" && <img id={id} src={close_button} alt="close" />}
    </div>
  );
};

export default InfoButton;
