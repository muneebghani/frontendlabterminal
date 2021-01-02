import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 220,
    position: "relative",
    overflow: "hidden",
    transition: "all 1s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
});

const SingleProduct = (props) => {
  const { product } = props;
  const classes = useStyles();
  const [rating, setRating] = React.useState(0);
  const updateRating = (newRating) => {
    setRating(newRating);
    console.log(rating);
  };
  return (
    <Grid item md={3} xs={12}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.prImage}
            title="Product"
          />
          <CardContent style={{ justifyContent: "center" }}>
            <Typography gutterBottom variant="h4" component="h2">
              {product.prName}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              $ {product.prPrice}
            </Typography>
            <Typography variant="body1">
              <Rating
                value={rating}
                precision={0.5}
                max={5}
                name="unique-rating"
                onChange={(event) => setRating(event.target.value)}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid container spacing={0}>
          <CardActions style={{ width: "100%", justifyContent: "center" }}>
            <Button
              size="large"
              color=""
              style={{ backgroundColor: "black", color: "white" }}
            >
              Add to cart
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
};

export default withRouter(SingleProduct);
