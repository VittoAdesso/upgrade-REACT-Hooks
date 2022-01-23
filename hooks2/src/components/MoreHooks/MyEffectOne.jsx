import React from 'react'

export const MyEffectOne = () => {
    const [characterList, setCharacterList] = React.useState([]);
    const [controlCharacter, setControlCharacter] = React.useState({
        controlCharacter: false,
        controlOTher: false
    });

    // React.useEffect(() => {
    //     (async () => {
    //         let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
    //             (res) => res.json()
    //         );
    //         setCharacterList(data.results);
    //     })();
    // }, []);

    const renderCharacters = async () => {
        let data = await fetch(`https://rickandmortyapi.com/api/character/`);
        let dataToJson = await data.json();
        setCharacterList(dataToJson.results);
        setControlCharacter(true);
    }

    return (
        <>
            <button onClick={renderCharacters}>Personajes</button>
            {controlCharacter ? characterList.map((character) => (
                <div key={character.id}>
                    <h2>name: {character.name}</h2>
                </div>
            )) : <h1>Hola</h1>}

        </>
    )
}
