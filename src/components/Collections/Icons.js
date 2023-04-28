import styles from "../../css/Collections/Icons.module.css";
import otherStyles from "../../css/Collections/Emotes.module.css";
import mStyles from "../../css/Collections/Main.module.css";
import eStyles from "../../css/Collections/Emotes.module.css";
import CollectionsHeader from "./Header";

import scroll from "../../img/Collections/IconsScroll.png";
import list from "../../img/Collections/IconsList.png";
import selected from "../../img/Collections/IconsSelected.png";

export default function CollectionsIcons() {
    return(
        <div className={styles.pageContainer}>
            <div>
                <img src={scroll} alt="collections-scroll" className={mStyles.scroll}></img>
                <p className={mStyles.scrollText}>8/500</p>
            </div>

            <img src={list} className={otherStyles.emoteList} alt="emote-list" ></img>

            <div className={styles.selectedContainer}>
                <img src={selected} alt="selected" className={styles.selected}></img>
                <div className={styles.selectedTextContainer}>
                    <div className={styles.textRowDiv}>
                        <p className={styles.textRow}>Champie Nunu</p>
                    </div>
                    <div className={styles.textRowDiv}>
                        <p className={styles.textRow}>Only available in the Essence Emporium</p>
                    </div>
                    <div className={styles.textRowDiv}>
                        <p className={`${styles.textRow} ${styles.gold}`}>Acquired 01.01.2023</p>
                    </div>
                </div>
            </div>

            <div className={eStyles.greyButtonsContainerRight}>
                <button class={mStyles.blackButton}>Search</button>
                <button class={mStyles.greyButton}>No Grouping</button>
                <button class={mStyles.greyButton}>By Year 🔻</button>
            </div>

            {CollectionsHeader(5)}
        </div>
    )
}