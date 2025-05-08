import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

const PokemonDetails = ({ pokemon }) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        {/* Pokémon Name */}
        <Typography variant="h4" align="center" gutterBottom>
          {pokemon.name.toUpperCase()}
        </Typography>

        {/* Pokémon Height and Weight */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body1">Height: {pokemon.height / 10}m</Typography>
          <Typography variant="body1">Mass: {pokemon.weight / 10}kg</Typography>
        </Box>

        {/* Base Experience */}
        <Typography variant="body1" gutterBottom>
          Base Experience: {pokemon.base_experience}
        </Typography>

        {/* Types */}
        <Typography variant="h6" gutterBottom>
          Types:
        </Typography>
        <Box sx={{ mb: 2 }}>
          {pokemon.types.map((type, index) => (
            <Typography key={index} variant="body2" color="textSecondary" display="inline">
              {type.type.name}{index < pokemon.types.length - 1 && ", "}
            </Typography>
          ))}
        </Box>

        {/* Abilities */}
        <Typography variant="h6" gutterBottom>
          Abilities:
        </Typography>
        <Box sx={{ mb: 2 }}>
          {pokemon.abilities.map((ability, index) => (
            <Typography key={index} variant="body2" color="textSecondary" display="inline">
              {ability.ability.name}{index < pokemon.abilities.length - 1 && ", "}
            </Typography>
          ))}
        </Box>

        {/* Stats */}
        <Typography variant="h6" gutterBottom>
          Stats:
        </Typography>
        <List>
          {pokemon.stats.map((stat, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={`${stat.stat.name}: ${stat.base_stat}`} />
              </ListItem>
              {index < pokemon.stats.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PokemonDetails;
