import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";

type AddCharacterProps = {
    addCharacter: (characterToAdd: Character) => void
}

export default function AddCharacter(props: AddCharacterProps) {

    // const [id, setId] = useState<string>("")
    // const [name, setName] = useState<string>("")
    // const [species, setSpecies] = useState<string>("")
    // const [status, setStatus] = useState<string>("")

    const [newCharacter, setNewCharacter] = useState<Character>({id: "", name:""})
    const navigate = useNavigate()

    const onSaveClick = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        props.addCharacter(newCharacter)
        navigate("/characters")
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={onSaveClick}>
            <input name={"id"} required={true} value={newCharacter?.id} placeholder={"Id"} onChange={onChange}/>
            <input name={"name"} value={newCharacter?.name} placeholder={"Name"} onChange={onChange}/>
            <input name={"species"} value={newCharacter?.species} placeholder={"Species"} onChange={onChange}/>
            <input name={"status"} value={newCharacter?.status} placeholder={"Status"} onChange={onChange}/>
            <button type="submit">Save</button>
            <button type="button" onClick={() => {console.log("Options Click")}}>Options</button>
        </form>
    )
}
