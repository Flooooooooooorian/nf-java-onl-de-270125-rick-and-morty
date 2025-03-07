import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./CharacterPage.tsx";
import HomePage from "./HomePage.tsx";
import Header from "./components/Header.tsx";
import CharacterDetailsPage from "./CharacterDetailsPage.tsx";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {allCharacters} from "./AllCharacters.ts";
import AddCharacter from "./AddCharacter.tsx";

export default function App() {

    const [characters, setCharacters] = useState<Character[]>(allCharacters)

    const addCharacter = (characterToAdd: Character) => {
        setCharacters([...characters, characterToAdd])
     }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/characters" element={<CharacterPage characters={characters} />}/>
                <Route path="/characters/add" element={<AddCharacter addCharacter={addCharacter}/>} />
                <Route path="/characters/:id" element={<CharacterDetailsPage characters={characters} />} />
            </Routes>
        </>
    );
}
