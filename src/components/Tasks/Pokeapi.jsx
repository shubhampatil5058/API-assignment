import React, { useEffect, useState } from 'react';
import ButtonAppBar from '../Home/AppBar';
import { styled } from '@mui/material/styles';
import { MenuItem, Select, Typography, List, ListItem, ListItemText, Box, Card, CardContent } from '@mui/material';
import pokeapiBg from '../Home/assets/pokiapibg.jpg';

const StyledContainer = styled('div')({
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${pokeapiBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: 0.7,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  display: 'flex',
  marginTop: '4%',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
});

const StyledSelect = styled(Select)({
  width: '40%',
  marginTop: '15px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9',
});

const StyledListItem = styled(ListItem)({
  color: 'black',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '5px',
  flexDirection: 'row'
});



const Pokeapi = () => {
  const [Datalist, setDatalist] = useState([]);
  const [Pokemondetails, setPokemondetails] = useState(null);

  useEffect(() => {
    const fetchDataList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setDatalist(data.results);
      } catch (error) {
        console.error('error fetching list:', error);
      }
    };
    fetchDataList();
  }, []);

  const handlePokemon = async (pokeapiUrl) => {
    try {
      const response = await fetch(pokeapiUrl);
      const data = await response.json();
      setPokemondetails(data);
    } catch (error) {
      console.log('error in fetching:', error);
    }
  };

  return (
    <Box>
      <ButtonAppBar />
      <StyledContainer>
      
        <StyledSelect onChange={(e) => handlePokemon(e.target.value)} defaultValue="" sx={{marginTop:'10%'}}>
          <MenuItem value="" disabled>
            Select a Pokemon
          </MenuItem>
          {Datalist.map((pokemon, index) => (
            <MenuItem key={index} value={pokemon.url}>
              {pokemon.name}
            </MenuItem>
          ))}
        </StyledSelect><br />

        {Pokemondetails && (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">{Pokemondetails.name}</Typography>
              <Typography variant="subtitle1">Abilities:</Typography>
              <List>
                {Pokemondetails.abilities.map((ability, index) => (
                  <StyledListItem key={index}>
                    <ListItemText primary={ability.ability.name} />
                    {index < Pokemondetails.abilities.length}
                  </StyledListItem>
                ))}
              </List>
            </CardContent>
            <CardContent>

            </CardContent>
          </Card>
        )}
      </StyledContainer>
    </Box>
  );
};

export default Pokeapi;
