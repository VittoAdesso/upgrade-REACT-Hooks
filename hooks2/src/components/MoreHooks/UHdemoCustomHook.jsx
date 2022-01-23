import React from 'react'

import { usePokemonCollection } from '../hook/usePokemonCollection';


export const UHdemoCustomHook = () => {
    const { filter, setFilter, pokemonCollection, loadPokemons } = usePokemonCollection();

    React.useEffect(() => {
        loadPokemons()
    }, [filter])

    return (
        <div>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />

            {
                pokemonCollection.map((pokemon, index) => (
                    <div key={index}>
                        <h3>{pokemon.name}</h3>
                    </div>
                ))
            }
        </div>
    )

}