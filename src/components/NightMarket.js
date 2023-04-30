import styles from "../css/NightMarket.module.css";
import Champion1 from "../img/NightMarketChampion1.png";
import Champion2 from "../img/NightMarketChampion2.png";
import Champion3 from "../img/NightMarketChampion3.png";
import Champion4 from "../img/NightMarketChampion4.png";
import Champion5 from "../img/NightMarketChampion5.png";
import Champion6 from "../img/NightMarketChampion6.png";
import GoldLine from "../img/NightMarketGoldLine.png";
export default function NightMarket() {
    console.log(window.innerWidth);
    return (
        <div className={styles.buy}>
            <div className={styles.yourshop}>
                <p className={styles.shoptitle}> YOUR SHOP</p>
                <p className={styles.undertitle}>ENDS IN 15 DAYS</p>
            </div>
            <p className={styles.bottom}> Reveal mystery discounts on skins & champions.  See something you like? Be sure to pick it up before time runs out! These discounts are only available on here.</p>
            <div className={styles.champions}>
                <img src={Champion1}></img>
                <img src={Champion2}></img>
                <img src={Champion3}></img>
                <img src={Champion4}></img>
                <img src={Champion5}></img>
                <img src={Champion6}></img>
            </div>
            <img className={styles.goldline} src={GoldLine}></img>  
        </div>
    )
}
