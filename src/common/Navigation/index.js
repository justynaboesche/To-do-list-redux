import { Link } from "react-router-dom";


const Navigation = () => {
    return (
<nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/autor">
            O autorze
          </Link>
        </li>
      </ul>
    </nav>

    );
    };

export default Navigation;