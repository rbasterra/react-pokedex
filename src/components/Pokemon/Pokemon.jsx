import React, { useEffect, useState } from 'react'

const Pokemon = ({pokemonName}) => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const [pokemon, setPokemon] = useState({
        name: "",
        number: "",
        species: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        type: "",
    });
    const [validPokemon, setValidPokemon] = useState(false);
    
    useEffect(() => {
        fetch(`${baseUrl}/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(res => {
                setPokemon({
                    name: pokemonName,
                    number: res.id,
                    species: res.species.name,
                    image: res.sprites.front_default,
                    hp: res.stats[0].base_stat,
                    attack: res.stats[1].base_stat,
                    defense: res.stats[2].base_stat,
                    speed: res.stats[5].base_stat,
                    type: res.types[0].type.name,
                });
                setValidPokemon(true);
            });        
    }, [pokemonName]);

  return (
    <div>
        {!validPokemon ? <h1>Please choose a valid pokemon</h1> : (
            <>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={pokemon.name} />
                <h3>Number: {pokemon.number}</h3>
                <h3>Species: {pokemon.species}</h3>
                <h3>Type: {pokemon.type}</h3>
                <h4>Hp: {pokemon.hp}</h4>
                <h4>Attack: {pokemon.attack}</h4>
                <h4>Defense: {pokemon.defense}</h4>
                <h4>Speed: {pokemon.speed}</h4>
            </>
        )}
    </div>
  )
}

export default Pokemon