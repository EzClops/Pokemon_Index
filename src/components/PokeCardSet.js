import React from 'react';
import Pokecard from './Pokecard';

const PokeCardSet = ({pokemon}) => {
    return (
        <>
            {
                pokemon.map((p, i) => {
                    return (
                        <Pokecard
                            sprite={pokemon[i].sprites.front_default}
                            name={pokemon[i].name}
                            type={pokemon[i].types[0].type.name}
                        />
                    );
                })
            }
        
        </>
    );

}

export default PokeCardSet;