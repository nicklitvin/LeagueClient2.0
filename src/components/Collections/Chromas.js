import styles from "../../css/Collections/Chromas.module.css";
import mStyles from "../../css/Collections/Main.module.css";
import eStyles from "../../css/Collections/Emotes.module.css";
import CollectionsHeader from "./Header";

import scroll from "../../img/Collections/ChromasScroll.png";
import list from "../../img/Collections/ChromasList.png";
import selected from "../../img/Collections/ChromasSelected.png";

export default function CollectionsChromas() {
    return(
        <div className={styles.pageContainer}>
            <div>
                <img src={scroll} alt="collections-scroll" className={mStyles.scroll}></img>
                <p className={mStyles.scrollText}>1/3</p>
            </div>

            <div className={styles.selectedContainer}>
                <img src={selected} alt="selected" className={styles.selected}></img>
                <div className={styles.selectedTextContainer}>
                    <div className={styles.textRowDiv}>
                        <p className={styles.textRow}>Coven Ahri (Dark Ritual Chroma)</p>
                    </div>
                    <div className={styles.textRowDiv}>
                        <p className={styles.textRow}>Skin released 09.12.2021</p>
                    </div>
                    <div className={styles.textRowDiv}>
                        <p className={`${styles.textRow} ${styles.gold}`}>Acquired 01.13.2023</p>
                    </div>
                </div>
            </div>

            <img src={list} className={styles.chromaList} alt="emote-list" ></img>

            <div className={eStyles.greyButtonsContainerRight}>
                <button class={mStyles.blackButton}>Search</button>
                <button class={mStyles.greyButton}>No Grouping</button>
                <button class={mStyles.greyButton}>By Year 🔻</button>
            </div>

            {CollectionsHeader(7)}
        </div>
    )
}