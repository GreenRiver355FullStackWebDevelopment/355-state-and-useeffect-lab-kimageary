import {useState, useEffect} from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import PokemonCard from './components/PokemonCard';
import './App.css'

function App() {
  const[pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([0,20]);

  useEffect(() => {
    fetchPokemon(page);
  }, [page])

  const fetchPokemon = async (pageRange) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pageRange[0]}&limit=${pageRange[1] - pageRange[0]}`);
    const data = await res.json();
     console.log(data.results);
    setPokemon(data.results);
  }
  const handleNext = () => {
    setPage((prevPage) => [prevPage[0] + 20, prevPage[1] + 20]);
  }

  const handlePrev = () => {
    if(page[0] === 0) return;
    setPage((prevPage) => [prevPage[0] - 20, prevPage[1] - 20]);
  }
  return (
    <Container sx={{mt: 4}}>
      <div>
        <Typography variant="h3" align="center" >Pokemon</Typography>
        <div className="main-container">
          <Grid container spacing={3} justifyContent="center">
            <PokemonCard pokemon={pokemon} ></PokemonCard>
          </Grid>
        </div>
      </div>

      <Box sx={{mt: 4, display:'flex', justifyContent:'center'}}>
        <Button sx={{ marginRight: 2 }} variant="contained" onClick={handlePrev}>Previous</Button>
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
    </Container>
  )
}

export default App
