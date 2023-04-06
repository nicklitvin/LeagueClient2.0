import "../css/CollectionsChampions.css";
import "../css/CollectionsHeader.css"
import "../css/CollectionsScroll.css"

import header from "../img/CollectionsHeader.png";
import scroll from "../img/CollectionsChampionsScroll.png"

export default function CollectionsChampions() {
    return (
        <div className="collectionsChampions-container">
            <img src={header} alt="collections-header" className="header"></img>
            <img src={scroll} alt="collections-scroll" className="scroll"></img>
        </div>
    )
}