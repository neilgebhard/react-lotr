import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../types";
import CharacterItem from "./CharacterItem";

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await axios.get("/character");
      setCharacters(res.data.docs);
    };
    fetchCharacters();
  }, []);

  return (
    <ul>
      {characters.map((character) => (
        <CharacterItem key={character._id} character={character} />
      ))}
    </ul>
  );
}
