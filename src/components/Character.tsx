import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Character as TCharacter } from "../types";

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
          <dl>
            <dt>Name</dt>
            <dd>{character.name}</dd>
            <dt>Birth</dt>
            <dd>{character.birth}</dd>
            <dt>Death</dt>
            <dd>{character.death}</dd>
            <dt>Gender</dt>
            <dd>{character.gender}</dd>
            <dt>Hair</dt>
            <dd>{character.hair}</dd>
            <dt>Height</dt>
            <dd>{character.height}</dd>
            <dt>Race</dt>
            <dd>{character.race}</dd>
            <dt>Realm</dt>
            <dd>{character.realm}</dd>
            <dt>Spouse</dt>
            <dd>{character.spouse}</dd>
            <dt>Wiki</dt>
            <dd>
              <a href={character.wikiUrl}>{character.wikiUrl}</a>
            </dd>
          </dl>
        </>
      )}
    </>
  );
}
