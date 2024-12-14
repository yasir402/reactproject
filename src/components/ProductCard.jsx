import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const ProductCard = ({ image, title, description, price }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '10px auto' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px' }}>
                        Price: ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to Cart
                </Button>
                <Button size="small" color="secondary">
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
