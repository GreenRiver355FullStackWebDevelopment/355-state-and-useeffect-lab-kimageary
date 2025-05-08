import { useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import PokemonDetails from './PokemonDetails';

const PokemonCard = ({ pokemon }) => {
  const [currPokemon, setPokemon] = useState();

  const onPokeClick = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
  };

  return (
    <>
      {currPokemon && (
        <Box sx={{ mt: 4 }}>
          <PokemonDetails pokemon={currPokemon} />
        </Box>
      )}

      <Grid container spacing={2} justifyContent="center">
        {pokemon.map((poke, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card 
              sx={{ cursor: 'pointer', boxShadow: 3, borderRadius: 2 }} 
              onClick={() => onPokeClick(poke.name)}
            >
              <CardContent>
                <Typography variant="h6" align="center">
                  {poke.name.toUpperCase()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PokemonCard;
