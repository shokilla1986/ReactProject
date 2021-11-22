import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      // border: `1px solid ${ctx.palette.primary.main}`,
      padding: "15px",
      width: "75%",
    },
    content: {
      boxSizing: "border-box",
      minHeight: "100%",
      paddingBottom: "90px",
    },

    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
      height: "80px",
      marginTop: "-80px",
      width: "75%",
    },
    icon: {
      // color: "#9c7e4e",
      color: `${ctx.palette.primary.main}`,
      cursor: "pointer",
    },
  };
});
