import headerStyle from "../css/CollectionsHeader.module.css";

import { NavLink } from 'react-router-dom';

export default function CollectionsHeader(selectedOptionNumber) {
    const options = [
        ["Champions","/collectionsChampions"],
        ["Skins","/collectionsChampionsSkins"],
        ["Spells","/collectionsChampionsSpells"],
        ["Icons","/collectionsChampionsIcons"],
        ["Wards","/collectionsChampionsWards"],
        ["Chromas","/collectionsChampionsChromas"]
    ]
    const result = [];

    for(let i = 0; i < 6; i++) {
        if(selectedOptionNumber - 1 == i) {
            result.push(
                <NavLink key={`header-child-${i}`} style={{textDecoration: 'none'}} to={options[i][1]}>
                    <p className={`${headerStyle.headerOption} ${headerStyle.selectedOption}`}>{options[i][0]}</p>
                </NavLink>
            )
        } else {
            result.push(
                <NavLink key={`header-child-${i}`} style={{textDecoration: 'none'}} to={options[i][1]}>
                    <p className={`${headerStyle.headerOption}`}>{options[i][0]}</p>
                </NavLink>
            )
        }
    }

    return(
        <div className={headerStyle.headerContainer}>
            <div className={headerStyle.header}>
                {result}
            </div>
        </div>
    )
}