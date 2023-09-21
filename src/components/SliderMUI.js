import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Grid } from '@mui/material';

const images = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const SliderMUI = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />
          <CardContent>
            <Button onClick={prevSlide} variant="contained" color="primary">
              Previous
            </Button>
            <Button onClick={nextSlide} variant="contained" color="primary">
              Next
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SliderMUI;
