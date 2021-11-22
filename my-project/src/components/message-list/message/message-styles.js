import { makeStyles } from "@mui/styles";

export const MessageStyles = makeStyles((ctx) => {
  return {
    User: {
      color: "red",
      border: "1px solid grey",
      width: "50%",
      borderRadius: "5px",
      backgroundColor: "aliceblue",
    },

    Bot: {
      color: "blue",
      border: "1px solid green",
      width: "50%",
      borderRadius: "5px",
      backgroundColor: "antiquewhite",
      marginLeft: "50%",
    },
  };
});
