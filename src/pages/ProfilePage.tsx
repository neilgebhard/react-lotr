import { useAuth } from "../contexts/auth";

export default function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>{auth && auth.name}</p>
    </>
  );
}
