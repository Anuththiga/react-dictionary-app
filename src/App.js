import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Meanings from './Components/Meanings';
import { Container } from '@mui/system';

function App() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState([]);

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeaning(data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word])

  return (
    <div className="App" style={{height: "100vh", backgroundColor: "#4e1547", color: "white"}}>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header 
          word={word}
          setWord={setWord}
        />
        <Meanings
          word={word}
          meaning={meaning}
        />
      </Container>
      
    </div>
  );
}

export default App;
