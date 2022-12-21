import React from 'react';
import Pokecard from './Pokecard';

const PokeCardSet = ({pokemon}) => {
    return (
        <>
            <a href='https://pokeapi.co/api/v2/pokemon/1/'>
            {
                
                pokemon.map((p, i) => {
                    return (
                        <Pokecard
                            sprite={pokemon[i].sprites.front_default}
                            name={pokemon[i].name}
                            type1={pokemon[i].types[0].type.name}
                        />
                    );
                })
            }
            </a>
            
            {/* /<button><Pokecard/></button> */}
        
        </>
    );

}

export default PokeCardSet;