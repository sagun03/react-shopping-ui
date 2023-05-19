import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import * as React from "react";

const StyledList = withStyles(() => ({
  root: {
    width: "100%",
    border: "2px solid steelblue",
    height: "180px",
    overflowY: "scroll",
    "@media only screen and (max-width: 550px)": {
      height: "280px",
    },
  },
}))(List);

const StyledListItem = withStyles(() => ({
  root: {
    border: "1px solid aliceblue",
    gap: "3rem",
    "@media only screen and (max-width: 550px)": {
      gap: "2rem",
    },
  },
}))(ListItem);

const Review = ({ products, order }) => {
  console.log(products, order);
  return (
    <React.Fragment>
      <Typography variant="h9" gutterBottom>
        Date: {order?.date}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Order summary ({order?.status})
      </Typography>
      <StyledList disablePadding>
        {products.map((product, index) => (
          <StyledListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={
                <>
                  {index + 1}. {product.title}
                  <> ({product?.quantity})</>
                </>
              }
              secondary={product.size}
            />
            <Typography variant="body2">
              {<> Rs. {product.price} </>}
            </Typography>
          </StyledListItem>
        ))}
        <StyledListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs. {order?.total}
          </Typography>
        </StyledListItem>
      </StyledList>
      <Divider />
      <Grid style={{ width: "100%" }}>
        <Grid item>
          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            Shipping Address:
          </Typography>
          <Typography gutterBottom>{order?.name}</Typography>
          <Typography gutterBottom>{order?.address}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
