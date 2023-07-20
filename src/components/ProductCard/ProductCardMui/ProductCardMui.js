import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 260,
  },
  stock: (props) => ({
    color: props.stock > 40 ? "green" : "red",
  }),
}));

export default function ProductCardMui({ price, title, thumbnail, stock }) {
  const classes = useStyles({ stock });

  return (
    <Card >
      <CardMedia
        component="img"
        height="220"
        image={thumbnail}
        alt={title}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.stock} gutterBottom>
          {stock > 40 ? "In stock" : "Low on stock"}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}

ProductCardMui.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
};
