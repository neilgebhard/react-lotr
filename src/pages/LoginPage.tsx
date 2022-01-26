import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export default function LoginPage() {
  const { login } = useAuth()!;
  const nameRef = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current!.value.trim();

    if (!name) return;

    login(name);
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input id="name" type="text" ref={nameRef} />
      </form>
    </>
  );
}
