import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./CharacterPage.tsx";
import HomePage from "./HomePage.tsx";
import Header from "./components/Header.tsx";
import CharacterDetailsPage from "./CharacterDetailsPage.tsx";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import AddCharacter from "./AddCharacter.tsx";
import axios from "axios";

export default function App() {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        console.log("First time rendering App")
        loadCharacters()
    }, [])

    const addCharacter = (characterToAdd: Character) => {
        axios.post("https://rickandmortyapi.com/api/character", characterToAdd)
        setCharacters([...characters, characterToAdd])
    }

    const loadCharacters = () => {
        console.log("Load Characters")

        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                console.log("Request finished")
                console.log(response.data)
                setCharacters(response.data.results)
            })
            .catch((errorResponse) => {
                console.log(errorResponse)
            })

        console.log("After Request")
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/"
                       element={<HomePage/>}/>
                <Route path="/characters"
                       element={<CharacterPage characters={characters}/>}/>
                <Route path="/characters/add"
                       element={<AddCharacter addCharacter={addCharacter}/>}/>
                <Route path="/characters/:id"
                       element={<CharacterDetailsPage characters={characters}/>}/>
            </Routes>
        </>
    );
}
