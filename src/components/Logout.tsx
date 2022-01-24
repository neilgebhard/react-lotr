import { useAuth } from "../contexts/auth";

export default function Logout() {
  const { logout } = useAuth()!;

  const handleClick = () => {
    logout();
  };

  return <button onClick={handleClick}>Logout</button>;
}
