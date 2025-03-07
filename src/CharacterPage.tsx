import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";

type Props = {
    characters: Character[]
}

export default function CharacterPage(props: Props) {

    const [searchText, setSearchText] = useState("");

    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));


    return (
        <div>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }
        </div>

    )
}
