import styles from "../../css/Collections/Wards.module.css";
import CollectionsHeader from "./Header";
import mStyles from "../../css/Collections/Main.module.css";
import otherStyles from "../../css/Collections/Emotes.module.css";

import scroll from "../../img/Collections/WardsScroll.png";
import list from "../../img/Collections/WardsList.png";
import selected from "../../img/Collections/WardsSelected.png";


export default function Wards() {
    return(
        <div className={styles.pageContainer}>
            <div>
                <img src={scroll} alt="collections-scroll" className={mStyles.scroll}></img>
                <p className={mStyles.scrollText}>1/200</p>
            </div>

            <img src={list} className={otherStyles.emoteList} alt="emote-list" ></img>

            <div className={styles.selectedContainer}>
                <img src={selected} alt="selected" className={styles.selected}></img>
                <div className={styles.selectedTextContainer}>
                    <div className={styles.textRowDiv}>
                        <p className={styles.textRow}>Underground Poro Ward</p>
                    </div>
                    <div className={styles.textRowDiv}>
                        <p className={styles.textRow}>This ward was released for purchase in the store in 2015</p>
                    </div>
                    <div className={styles.textRowDiv}>
                        <p className={`${styles.textRow} ${styles.gold}`}>Acquired 01.01.2015</p>
                    </div>
                </div>
            </div>

            <div className={styles.greyButtonsContainerRight}>
                <button class={mStyles.blackButton}>Search</button>
                <button class={mStyles.greyButton}>No Grouping</button>
                <button class={mStyles.greyButton}>Alphabetical 🔻</button>
            </div>
            {CollectionsHeader(6)}
        </div>
    )
}