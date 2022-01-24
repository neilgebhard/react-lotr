import { Link } from "react-router-dom";
import { Character } from "../types";

type CharacterItemProps = {
  character: Character;
};

export default function CharacterItem({ character }: CharacterItemProps) {
  return (
    <li key={character._id}>
      <Link to={`/characters/${character._id}`}>{character.name}</Link>
    </li>
  );
}
