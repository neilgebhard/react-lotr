import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterItem from "./CharacterItem";
import type { Character as TCharacter } from "./types";

export default function Character() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<TCharacter | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await axios.get(`/character/${characterId}`);
      setCharacter(res.data.docs[0]);
    };
    fetchCharacter();
  }, [characterId]);

  return (
    <>
      {character && (
        <>
          <h1>{character.name}</h1>
          <CharacterItem character={character} />
        </>
      )}
    </>
  );
}
