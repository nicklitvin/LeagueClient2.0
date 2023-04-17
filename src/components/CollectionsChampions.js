import styles from "../css/CollectionsChampions.module.css";

import scroll from "../img/CollectionsChampionsScroll.png";
import champs from "../img/CollectionsChampionsChampions.png";
import difficulty from "../img/CollectionsChampionsDifficulty.png";
import exp from "../img/CollectionsChampionsXP.png";

import CollectionsHeader from "./CollectionsHeader.js";
import { NavLink } from "react-router-dom";

export default function CollectionsChampions() {
    return (
        <div className={styles.collectionsChampionsContainer}>

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
                <NavLink to="/collectionsChampionsChampionProgressions">
                    <button class={styles.greyButton}>Progressions</button>
                </NavLink>
                <NavLink to="/collectionsChampionsChampionAbilities">
                    <button class={styles.greyButton}>Abilities</button>
                </NavLink>
                <NavLink to="/collectionsChampionsChampionSkins">
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
                <p className={styles.scrollText}>2/163</p>
            </div>
        </div>
    )
}