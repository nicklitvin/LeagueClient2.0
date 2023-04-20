import styles from "../../css/Collections/Spells.module.css";
import spells from "../../img/Collections/SpellsList.png";
import CollectionsHeader from "./Header";

export default function CollectionsSkins() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.textContainer}>
                <p className={styles.spellName}>Flash</p>
                <p> Flash is a ground-targeted summoner spell that causes
                    your champion to blink a short distance in the direction
                    of the cursor
                </p>
                <p> Flash cannot be used while rooted, grounded, or
                    unable to cast. 
                </p>
                <p> With the Hextech Flastraption rune, Hexhlash replaces
                    Flash when it’s on cooldown. 
                </p> <br></br>
                <p>Cooldown - 300sec.</p>
                <p>Available - All maps</p>
            </div>

            <img src={spells} alt="spells" className={styles.spellsList}></img>
            {CollectionsHeader(4)}
        </div>
    )
}