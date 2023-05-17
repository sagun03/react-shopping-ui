import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import { CustomButton } from "./OrderSummary";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const LocationDialogBox = ({ open, setOpen }) => {
  const handleClose = () => {
    setPincode("");
    setOpen(false);
  };
  const cart = useSelector((state) => state.cart);
  const [pincode, setPincode] = useState("");
  console.log(
    cart?.product,
    "result",
    <>
      Hi I want to order these items from your website, these are the following:{" "}
      {cart?.products?.map(
        (item, index) =>
          `${index + 1}: Name: ${item?.title} Quantity: ${
            item?.quantity
          } Size: ${item?.size}. Your Final Total Amount is Rs. ${
            cart?.total < 200
              ? cart?.total
              : cart?.total - ((20 / 100) * cart?.total + 0.0).toFixed(2)
          }
          ${cart?.total < 200 && +`, with discount of 20%`}`
      )}
    </>
  );
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <>
            {"Please Enter your Location Pin code"}:{" "}
            <TextField
              required
              id="pin code"
              name="pin code"
              label="Enter Pin Code here"
              fullWidth
              autoComplete="Pin Code"
              variant="standard"
              onChange={(e) => setPincode(e.target.value)}
            />
          </>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            For Now We are limited to only one city that is Dhampur dist. Bijnor
            UP, with Pin code 246761
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
            }}
          >
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {pincode === "246761" && (
              <a
                href={`https://wa.me/91?text=${encodeURIComponent(
                  `Hi I want to order these items from your website, these are the following: \n ${cart?.products?.map(
                    (item, index) =>
                      `${index + 1}: Name: ${item?.title}, Quantity: ${
                        item?.quantity
                      }, Size: ${item?.size}.\n`
                  )}\n Your Final Total Amount is Rs. ${
                    cart?.total < 200
                      ? cart?.total
                      : cart?.total -
                        ((20 / 100) * cart?.total + 0.0).toFixed(2)
                  } ${cart?.total > 200 ? `, with discount of 20%` : ""}
                  `
                )}`}
              >
                <CustomButton
                  onClick={handleClose}
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                >
                  Send Order
                </CustomButton>
              </a>
            )}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LocationDialogBox;
