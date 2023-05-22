import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bkdemoflowdiag from '../bkdemoflowdiag.png';

export default function ActionAreaCard({text, title}) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bkdemoflowdiag}
          alt="Demo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
