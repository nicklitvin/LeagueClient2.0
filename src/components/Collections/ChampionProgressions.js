import styles from "../../css/Collections/ChampionProgressions.module.css";
import otherStyles from "../../css/Collections/Main.module.css";

import ChampionsHeader from "./ChampionHeader.js";
import featuredBar1 from "../../img/Collections/ChampionProgressionsBar1.png";
import featuredBar2 from "../../img/Collections/ChampionProgressionsBar2.png";
import featuredBar3 from "../../img/Collections/ChampionProgressionsBar3.png";
import featuredBar4 from "../../img/Collections/ChampionProgressionsBar4.png";
import featuredX from "../../img/Collections/ChampionProgressionsXButton.png";
import scroll from "../../img/Collections/ChampionProgressionsScroll.png";
import series1 from "../../img/Collections/ChampionProgressionsSeries1.png";
import series2 from "../../img/Collections/ChampionProgressionsSeries2.png";
import plus from "../../img/Collections/ChampionProgressionsPlus.png";
import rightBar1 from "../../img/Collections/ChampionProgressionsRightBar1.png";
import rightBar2 from "../../img/Collections/ChampionProgressionsRightBar2.png";
import rightBar3 from "../../img/Collections/ChampionProgressionsRightBar3.png";

export default function ChampionProgressions() {
    return (
        <div className={styles.pageContainer}>
            {ChampionsHeader(4)}

            <div className={otherStyles.champTextContainer}>
                <p className={otherStyles.champTitle}>Ahri</p>
                <p className={otherStyles.champSlogan}>THE NINE-TAILED FOX</p>
            </div>

            <div className={styles.featuredContainer}>
                <p class={styles.featuredTitle}>Featured Progressions</p>
                <div className={styles.featuredOption}>
                    <p>Mastery Level 7 - 500.000XP</p>
                    <img src={featuredBar1} alt="bar1"></img>
                </div>
                <div className={styles.featuredOption}>
                    <p>Fatal Flirtations - 64 &nbsp;&nbsp;<img src={featuredX} className={styles.x} alt="X"></img></p>
                    <img src={featuredBar2} alt="bar1"></img>
                </div>
                <div className={styles.featuredOption}>
                    <p>Spirit Rusher = 140m &nbsp;&nbsp;<img src={featuredX} className={styles.x} alt="X"></img></p>
                    <img src={featuredBar3} alt="bar1"></img>
                </div>
                <div className={styles.featuredOption}>
                    <p>Rebounder - 0 &nbsp;&nbsp;<img src={featuredX} className={styles.x} alt="X"></img></p>
                    <img src={featuredBar4} alt="bar1"></img>
                </div>
            </div>

            <div className={styles.seriesContainer}>
                <div className={styles.seriesListTitle}>
                    <p className={styles.featuredTitle}>Series 1 &nbsp;&nbsp;<button className={styles.seriesButton}>Unlock</button></p>
                </div>
                <div className={styles.seriesSection}>
                    <img src={series1} alt="series-1" className={styles.seriesIcon}></img>
                    <div className={styles.seriesRightRowContainer}>
                        <div className={styles.seriesRow}>
                            <p className={styles.purple}>Fatal Flirtations (3/5)&nbsp;&nbsp;<img src={plus} alt="plus" className={styles.plus}/></p>
                        </div>
                        <div className={styles.seriesRow}>
                            <p>Charms (E) leading to kills within 5s</p>
                        </div>
                        <div className={styles.seriesRow}>
                            <p><img src={rightBar1} alt="right-1" className={styles.rightBar}></img>&nbsp;&nbsp;&nbsp;64/70</p>
                        </div>
                    </div>
                </div>
                <div className={styles.seriesSection}>
                    <img src={series2} alt="series-2" className={styles.seriesIcon}></img>
                    <div className={styles.seriesRightRowContainer}>
                        <div className={styles.seriesRow}>
                            <p className={styles.green}>LDR (1/5)&nbsp;&nbsp;<img src={plus} alt="plus" className={styles.plus}/></p>
                        </div>
                        <div className={styles.seriesRow}>
                            <p>Distance traveled with Spirit Rush (R)</p>
                        </div>
                        <div className={styles.seriesRow}>
                            <p><img src={rightBar2} alt="right-2" className={styles.rightBar}></img>&nbsp;&nbsp;&nbsp;140m/300m</p>
                        </div>
                    </div>
                </div>
                <div className={styles.seriesSection}>
                    <img src={series1} alt="series-1" className={styles.seriesIcon}></img>
                    <div className={styles.seriesRightRowContainer}>
                        <div className={styles.seriesRow}>
                            <p className={styles.purple}>On the Rebound (1/5)&nbsp;&nbsp;<img src={plus} alt="plus" className={styles.plus}/></p>
                        </div>
                        <div className={styles.seriesRow}>
                            <p>Orbs of Deception (Q) that deal both Magic and True Damage to the same champion</p>
                        </div>
                        <div className={styles.seriesRow}>
                            <p><img src={rightBar3} alt="right-3" className={styles.rightBar}></img>&nbsp;&nbsp;&nbsp;0/5</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src={scroll} alt="eternals-scroll" className={otherStyles.scroll}></img>
                <p className={otherStyles.scrollText}>1/3</p>
            </div>
        </div>
    )
}