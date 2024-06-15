import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../Home/AppBar';
import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Select, MenuItem, styled } from '@mui/material';
import Bg from '../Home/assets/bg.jpg';

const BackgroundBox = styled(Box)({
  backgroundImage: `url(${Bg})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
});

function Product() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`)
      .then(response => response.json())
      .then(data => {
        // Sort the data based on price before setting it in state
        const sortedData = data.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
        setProducts(sortedData);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <BackgroundBox>
      <ButtonAppBar />
      <Box sx={{ width: '100%', maxWidth: '1200px', marginTop:'4%' }}>
        <h1>Product List</h1>
        <label htmlFor="sort">Sort by:</label>
        <Select id="sort" onChange={handleSortChange} value={sortOrder}>
          <MenuItem value="asc">Price: Low to High</MenuItem>
          <MenuItem value="desc">Price: High to Low</MenuItem>
        </Select>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          {products.map(product => (
            <Card key={product.id} style={{ maxWidth: 345, margin: 10 }}>
              <CardHeader
                title={product.title}
                subheader={`$${product.price}`}
              />
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </BackgroundBox>
  );
}

export default Product;
