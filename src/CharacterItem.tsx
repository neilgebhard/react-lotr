import { Character } from "./types";

type CharacterItemProps = {
  character: Character;
};

export default function CharacterItem({ character }: CharacterItemProps) {
  return (
    <dl>
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
  );
}
