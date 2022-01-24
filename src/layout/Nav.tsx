import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Logout from "../components/Logout";

export default function Nav() {
  const { name } = useAuth()!;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <ul>
        {name ? (
          <>
            <li>
              <Link to="profile">{name}</Link>
            </li>
            <li>
              <Logout />
            </li>
          </>
        ) : (
          <li>
            <Link to="login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
