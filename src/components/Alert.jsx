import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const CustomAlert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Alert = ({ type, message, open, setOpen }) => {
  const getAlert = (type, message) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "success":
        return (
          <CustomAlert onClose={handleClose} severity="success">
            {message}
          </CustomAlert>
        );
      case "error":
        return (
          <CustomAlert onClose={handleClose} severity="error">
            {message}
          </CustomAlert>
        );
      case "warning":
        return (
          <CustomAlert onClose={handleClose} severity="warning">
            {message}
          </CustomAlert>
        );
      case "info":
        return (
          <CustomAlert onClose={handleClose} severity="info">
            {message}
          </CustomAlert>
        );
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
      {getAlert(type, message)}
    </Snackbar>
  );
};

export default Alert;
