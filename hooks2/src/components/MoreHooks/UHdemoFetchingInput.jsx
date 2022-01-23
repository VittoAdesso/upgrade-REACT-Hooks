import React from 'react'
import { useDebounce } from "use-debounce";

export const UHdemoFetchingInput = () => {
    const [filter, setFilter] = React.useState("");
    const [debounceFilter] = useDebounce(filter, 500);
    const [pokemonCollection, setPokemonCollectio] = React.useState([])

    React.useEffect(() => {
        const getPokemonFiltered = async () => {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`)
            const pokemonToJson = await pokemon.json();
            return {
                ...pokemonToJson,
                name: pokemonToJson.name,
                image: pokemonToJson.sprites.front_default
            }
        }
        getPokemonFiltered().then((pokemon) => setPokemonCollectio([pokemon]))
    }, [debounceFilter])

    return (
        <div>
            <h3>Busca tu pokemon</h3>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            {
                pokemonCollection.map((pokemon, index) =>
                    <div key={index}>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                )
            }
        </div>
    )
}