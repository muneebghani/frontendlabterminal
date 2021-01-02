import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Container, Grid, Grow, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, toast } from "react-toastify";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "black",
    textDecoration: "none",
  },
}));

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  const getData = () => {
    axios
      .get("https://backend-lab-terminal.herokuapp.com/listofproducts")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          <p>Data invalid</p>;
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Seller</h1>
      <br />
      <hr />
      <br />
      <Typography
        variant="body1"
        style={{ marginLeft: "27rem", marginRight: "25px", display: "inline" }}
      >
        <Link to="/" className={classes.link}>
          Tshirts
        </Link>
      </Typography>
      <Typography
        variant="body1"
        style={{ marginRight: "25px", display: "inline" }}
      >
        <Link to="/typography" className={classes.link}>
          Hoodies
        </Link>
      </Typography>
      <Typography
        variant="body1"
        style={{ marginRight: "25px", display: "inline" }}
      >
        <Link to="/contactus" className={classes.link}>
          Posters
        </Link>
      </Typography>
      <Typography
        variant="body1"
        style={{ marginRight: "25px", display: "inline" }}
      >
        <Link to="/myaccount" className={classes.link}>
          Albums
        </Link>
      </Typography>
      <Typography variant="body1" style={{ display: "inline" }}>
        <ShoppingCartIcon />
      </Typography>
      <br />
      <br />
      <hr />
      <br />
      <br />
      {loading ? (
        <LinearProgress />
      ) : products.length === 0 ? (
        toast.error("Error: There are no products in DB", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "",
          transition: Slide,
        })
      ) : (
        <Container>
          <Grow in>
            <Grid container spacing={6}>
              {products.map((product, index) => (
                <SingleProduct key={index} product={product} />
              ))}
            </Grid>
          </Grow>
        </Container>
      )}
    </div>
  );
};

export default Products;
