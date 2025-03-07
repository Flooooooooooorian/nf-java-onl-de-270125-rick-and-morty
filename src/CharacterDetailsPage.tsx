import {useParams} from "react-router-dom";
import {Character} from "./types/RickAndMortyCharacter.ts";

type Props = {
    characters: Character[]
}

export default function CharacterDetailsPage(props: Props) {

    const params = useParams()
    const id = params.id

    const character = props.characters.find((character) => character.id === Number(id))

    if (character === undefined) {
        return <p>Character not found</p>
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image}/>
            <p>{character.status}</p>
            <p>{character.origin.name}</p>
        </div>
    )
}
