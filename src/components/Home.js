import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p className="home-p">Home Page</p>
      <NavLink to="/play">
        <button>Play</button>
      </NavLink><br></br>
      <NavLink to="/collectionsChampions">
        <button>Collections</button>
      </NavLink>
      <NavLink to="/nightmarket">
        <button>NightMarket</button>
      </NavLink>
    </div>
  );
}