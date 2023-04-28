import Tftheader from "./Tftheader";
import styles from "../../css/TFT/Tfthome.module.css";

export default function TftHome() {
    return (
        <div className={styles.pageContainer}>
            {Tftheader(1)}
        </div>
    )
}