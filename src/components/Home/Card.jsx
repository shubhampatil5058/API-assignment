import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bg1 from './assets/1_stu48X1_GoUeHkxIl2py5A.png';
import bg2 from './assets/ogimage.jpg';
import bg3 from './assets/fakestore-api.jpg';

const CenterContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const CardContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '1200px',
};

const data = [
  {
    id: 1,
    image: bg1,
    title: 'PokeAPI (TASK 1)',
    description:
      "When the user selects a pokemon from the dropdown, the application should make a second API call using the 'url' returned in the first API call to fetch the pokemon's details, including its abilities, and display them on the page. Once the details are fetched, they should be cached and the application should not make another API call for that pokemon again.",
    route: '/Pokeapi', 
  },
  {
    id: 2,
    image: bg2,
    title: 'FakeStoreAPI (TASK 2)',
    description:
      'Displays a list of products in ascending order based on price. The application should also include a dropdown to allow the user to change the sorting of the products between ascending and descending. When the user changes the sorting order, the application should update the query parameter value and fetch the products with the new sorting order.',
    route: '/Product', 
  },
  {
    id: 3,
    image: bg3,
    title: 'FakeStoreAPI (TASK 3)',
    description:
      'Displays a list of products in the cart. For each product in the cart, the application should make an API call to fetch the product details using the ID returned in the cart API and display the product title, price, and image. API returns details for a single product. You will need to make an API call for each product in the cart to fetch the product details.',
    route: '/', 
  },
];

export default function ActionAreaCard() {
  const handleClick = (route) => {
    window.location.href = route;
  };

  return (
    <Router> 
      <div style={CenterContainer}>
        <div style={CardContainer}>
          {data.map((card) => (
            <Card key={card.id} sx={{ maxWidth: 345, margin: '10px' }}>
              <CardActionArea onClick={() => handleClick(card.route)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'italic', fontStyle: 'italic' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'italic', fontStyle: 'italic' }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </Router>
  );
}
