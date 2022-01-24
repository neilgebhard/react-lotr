import axios from "axios";
import { useState, FormEvent } from "react";
import CharacterItem from "./CharacterItem";
import type { Character } from "../types";

export default function Search() {
  const [term, setTerm] = useState("");
  const [character, setCharacter] = useState<Character | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fetchCharacter = async () => {
      const res = await axios.get("/character", {
        params: {
          name: term,
        },
      });
      setCharacter(res.data.docs[0]);
    };
    fetchCharacter();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      {character && <CharacterItem character={character} />}
    </>
  );
}
