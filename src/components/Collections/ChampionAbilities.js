import styles from "../../css/Collections/ChampionAbilities.module.css";
import otherStyles from "../../css/Collections/Main.module.css";
import ChampionsHeader from "./ChampionHeader.js";
import abilities from "../../img/Collections/ChampionAbilitiesAbilities.png";

export default function ChampionAbilities() {
    const greenColor = {
        color: "#70FF00"
    };
    const purpleColor = {
        color: "#8F00FF"
    }

    return (
        <div className={styles.pageContainer}>

            <div className={otherStyles.champTextContainer}>
                <p className={otherStyles.champTitle}>Ahri</p>
                <p className={otherStyles.champSlogan}>THE NINE-TAILED FOX</p>
            </div>

            <div className={styles.abilityDescriptionContainer}>
                <p className={styles.abilityTitle}>Essence Theft - Passive</p>
                <p> Innate: Ahri generates a stack of Essence Fragment whenever
                    she kills a minion or  monster. At 9 stacks, she consumes
                    them to <span style={greenColor}>heal</span> herself for
                    35 − 95 (based on level) <span style={purpleColor}>(+ 20% AP)</span>.
                </p>
                <p> Additionally, whenever Ahri scores a champion takedown
                    within 3 seconds of damaging them, she consumes their
                    essence to <span style={greenColor}>heal</span> herself for 75 − 165 (based on level)
                    <span style={purpleColor}>(+ 30% AP)</span>.</p>
            </div>

            <img src={abilities} className={styles.abilityIcons} alt="ability-icons"></img>

            {ChampionsHeader(3)}
        </div>
    )    
}