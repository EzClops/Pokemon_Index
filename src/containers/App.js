import './App.css';
import React, { Component } from 'react';
import PokeCardSet from '../components/PokeCardSet';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      searchfield:''
    }
  }

  async componentDidMount() {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=905')
      const users = await resp.json();
      const pokeSet = users.results;
      const getData = async function() {
        const ObjPokemon = await Promise.all(
          pokeSet.map(async function(pokeURL) {
            const response = await fetch(pokeURL.url);
            return response.json();
          }), 
        );
        return ObjPokemon;
      };
      const val = await getData();
      this.setState({pokemon: val});
  }

  onSearchChange = (event) => {
    this.setState( {searchfield: event.target.value})
  }

  

  
  render() {
    const {pokemon, searchfield} = this.state;
    const filterPokemon = pokemon.filter(poke => {
      return poke.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    const filterPokemon2 = pokemon.filter(poke => {
      return poke.types[0].type.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    const ref = React.createRef();
      return (
        <div className="App bg-dark-red">
          <header className="App-header bg-light-red">
            <h1 className='bg-white near-black shadow-5 br3 underline'>Pokemon Index</h1>
            <div className="bg-light-red">
              
              <div>
                <Searchbox searchChange = { this.onSearchChange }/>
              </div>
              <Scroll>
                
                  <PokeCardSet pokemon={filterPokemon}/>
                  
                  <PokeCardSet pokemon={filterPokemon2}/>
                
              </Scroll>
                
              
              
            </div>
          
          </header>
        </div>
    );
  }
}
  


export default App;
