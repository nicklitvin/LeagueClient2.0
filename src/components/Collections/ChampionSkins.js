import styles from "../../css/Collections/ChampionSkins.module.css";
import otherStyles from "../../css/Collections/Main.module.css";

import skins from "../../img/Collections/ChampionSkinsSkins.png";
import scroll from "../../img/Collections/ChampionSkinsScroll.png";

import CollectionsChampionsHeader from "./ChampionHeader.js";

export default function CollectionsChampionsSkins() {
    return (
        <div className={styles.collectionsChampionsSkinsContainer}>
            
            <div className={otherStyles.champTextContainer}>
                <p className={otherStyles.champTitle}>Ahri</p>
                <p className={otherStyles.champSlogan}>THE NINE-TAILED FOX</p>
            </div>
            
            <div className={styles.purchaseDiv}>
                <p className={styles.purchaseTitle}>Arcade Ahri</p>
                <button className={styles.purchaseButton}>Purchase</button>
            </div>

            <div className={otherStyles.greyButtonsContainerRight}>
                <button class={otherStyles.blackButton}>Search</button>
                <button class={otherStyles.greyButton}>By Popularity 🔻</button>
                <button class={otherStyles.greyButton}>Show Owned</button>
            </div>

            <img src={skins} alt="collections-skins" className={otherStyles.champSelect}></img>

            <div>
                <img src={scroll} alt="collections-scroll" className={otherStyles.scroll}></img>
                <p className={otherStyles.scrollText}>7/14</p>
            </div>

            {CollectionsChampionsHeader(2)}
        </div>
    )
}