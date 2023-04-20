import styles from "../../css/Collections/Emotes.module.css";
import otherStyles from "../../css/Collections/Main.module.css";

import emotes from "../../img/Collections/EmotesList.png";
import wheel from "../../img/Collections/EmotesWheel.png";
import circle from "../../img/Collections/EmoteCircle.png";
import scroll from "../../img/Collections/EmotesScroll.png";

import CollectionsHeader from "./Header";

export default function CollectionEmotes() {
    return(
        <div className={styles.pageContainer}>
            {CollectionsHeader(3)}

            <div>
                <img src={scroll} alt="collections-scroll" className={otherStyles.scroll}></img>
                <p className={otherStyles.scrollText}>1/182</p>
            </div>

            <img src={emotes} className={styles.emoteList} alt="emote-list" ></img>

            <img src={wheel} className={styles.emoteWheel} alt="emote-wheel"></img>

            <div className={`${styles.wheelContainer} ${styles.first}`}>
                <img src={circle} className={styles.wheel} alt="emote-circle"></img>
                <p>Start</p>
            </div>
            <div className={`${styles.wheelContainer} ${styles.second}`}>
                <img src={circle} className={styles.wheel} alt="emote-circle"></img>
                <p>First Blood</p>
            </div>
            <div className={`${styles.wheelContainer} ${styles.third}`}>
                <img src={circle} className={styles.wheel} alt="emote-circle"></img>
                <p>Ace</p>
            </div>
            <div className={`${styles.wheelContainer} ${styles.fourth}`}>
                <img src={circle} className={styles.wheel} alt="emote-circle"></img>
                <p>Victory</p>
            </div>

            <div className={styles.greyButtonsContainerRight}>
                <button class={otherStyles.blackButton}>Search</button>
                <button class={otherStyles.greyButton}>No Grouping</button>
                <button class={otherStyles.greyButton}>By Year 🔻</button>
            </div>
        </div>
    )
}