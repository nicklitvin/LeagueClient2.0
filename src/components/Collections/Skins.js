import styles from "../../css/Collections/Skins.module.css";
import otherStyles from "../../css/Collections/Main.module.css";
import header from "./Header.js";
import scroll from "../../img/Collections/SkinsScroll.png";
import skins from "../../img/Collections/SkinsList.png";

export default function CollectionsSkins() {
    return(
        <div className={styles.pageContainer}>
            <div>
                <img src={scroll} alt="collections-scroll" className={otherStyles.scroll}></img>
                <p className={otherStyles.scrollText}>2/163</p>
            </div>

            <div className={otherStyles.greyButtonsContainerRight}>
                <button class={otherStyles.blackButton}>Search</button>
                <button class={otherStyles.greyButton}>No Grouping</button>
                <button class={otherStyles.greyButton}>By Year 🔻</button>
            </div>

            <img src={skins} alt="collections-skins" className={otherStyles.champSelect}></img>

            <div className={styles.skinDescription}>
                <p className={styles.skinDate}>Acquired 01.01.2023</p>
                <p className={styles.skinName}>Arcade Ahri</p>
            </div>

            {header(2)}
        </div>
    )
}