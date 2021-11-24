import { makeStyles } from "@mui/styles";

export const headerStyles = makeStyles(() => {
  return {
    header: {
      width: "100%",
      height: "50px",
      backgroundColor: "grey",
      alignItems: "center",
      display: "flex",

      "& a": {
        color: "white",
        marginRight: "50px",
        textDecoration: "none",
      },
    },
    // header a: {
    //   color: "white",
    //   alignItems: "center",
    // },
  };
});
