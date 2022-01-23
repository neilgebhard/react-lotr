import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Character } from "./types";

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await axios.get("/character");
      console.log(res.data.docs);
      setCharacters(res.data.docs);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <Link to={`/characters/${character._id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
