import styles from "../../css/Collections/Main.module.css";

import scroll from "../../img/Collections/MainScroll.png";
import champs from "../../img/Collections/MainChampions.png";
import difficulty from "../../img/Collections/MainDifficulty.png";
import exp from "../../img/Collections/MainXP.png";

import { NavLink } from "react-router-dom";
import CollectionsHeader from "./Header.js";

export default function CollectionsChampions() {
    return (
        <div className={styles.pageContainer}>

            {CollectionsHeader(1)}

            <img src={champs} alt="collections-champions" className={styles.champSelect}></img>

            <div className={styles.champTextContainer}>
                <p className={styles.champTitle}>Ahri</p>
                <p className={styles.champSlogan}>THE NINE-TAILED FOX </p>
                <p className={styles.champDescription}> 
                    Innately connected to the magic of the spirit realm,
                    Ahri is a mysterious fox-like vastaya in search of
                    her place in the world. Having become a somewhat
                    reluctant and empathetic predator since entering mortal
                    society, she prefers to manipulate her prey's emotions
                    before partaking of their  life essence—receiving flashes
                    of memory and insight from each soul she consumes.
                </p>
                <br></br>
                <p className={styles.champDescription}>Difficulty: Medium</p>
                <img src={difficulty} alt="champ-diff"></img>
                <p className={styles.champDescription}>Mastery Level 4: 18000/21500XP</p>
                <img src={exp} alt="champ-exp"></img>
            </div>
            
            <div className={styles.greyButtonsContainer}>
                <NavLink to="/collectionsChampionsProgressions">
                    <button class={styles.greyButton}>Progressions</button>
                </NavLink>
                <NavLink to="/collectionsChampionsAbilities">
                    <button class={styles.greyButton}>Abilities</button>
                </NavLink>
                <NavLink to="/collectionsChampionsSkins">
                    <button class={styles.greyButton}>Skins</button>
                </NavLink>
            </div>

            <div className={styles.greyButtonsContainerRight}>
                <button class={styles.blackButton}>Search</button>
                <button class={styles.greyButton}>Order: Alphabetical</button>
                <button class={styles.greyButton}>Show All</button>
            </div>

            <div>
                <img src={scroll} alt="collections-scroll" className={styles.scroll}></img>
                <p className={styles.scrollText}>6/50</p>
            </div>
        </div>
    )
}