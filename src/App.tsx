import CardList from 'CardList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(result => setCharacters(result.results))
  }, []);

  return (
    <div className="App">
      <CardList characters={characters} />
    </div>
  );
}

export default App;
