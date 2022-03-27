
import './App.scss';
import {useState} from 'react'
import Pokemon from './components/Pokemon/Pokemon';

function App() {

  const [pokemonName, setPokemonName] = useState('');
  const [searchPokemon, setSearchPokemon] = useState(false);
  const [searchParam, setSearchParam] = useState('');

  const handleClick = () => {
    
    if(!(pokemonName === '')) {
      setSearchPokemon(true);
      setSearchParam(pokemonName);
    }else {
      setSearchPokemon(false);
    }
     
  }

  return (
    <div className="App">
      <div className='TitleSection'>
        <h1>Pokedex</h1>
        <input type='text' onChange={(e) => setPokemonName(e.target.value)} value={pokemonName.toLowerCase()}/>
        <button onClick={handleClick}>Search Pokemon</button>

        {searchPokemon && <Pokemon pokemonName={searchParam}/>}
      </div>
    </div>
  );
}

export default App;
