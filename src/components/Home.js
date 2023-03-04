import '../css/Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Home Page</p>
      <NavLink to="/play">
        <button>Play</button>
      </NavLink>
    </div>
  );
}

export default Home;
