import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "#0F2D25",
    color: "black",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: 10,
    // },
  },

  headerinner: {
    backgroundImage:'',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
    minHeight: "100vh",
  },

  mainIconBox: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    width: "20rem",
    alignItems: "center",
  },

  typography: {
    
    textAlign: "center",
    marginTop: 10,
  },

  middleContainer: {
    display: "flex",
    height: "100%",
    margin: "2rem 0",
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40vh",
    width: "100vw",
    background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
  },

  buttonStyles: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: "1rem",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "3.5rem",
    width: "10rem",
  },

  centerBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundImage: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
  },

  cardContainer: {
    background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
    display: "flex",
    flexWrap: "wrap",
    width: "50vw",
    height: "35vh",
    justifyContent: "space-evenly",
  },
  paperStyles: {
    backgroundImage: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
    margin: 2,
    width: "30%",
    height: "100%",
    textAlign: "center",
  },

  cardIconstyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardBoxStyles: {
    margin: "1rem 0",
    width: "15rem",
    padding: "1rem",
    height: "19rem",
    textAlign: "center",
    background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
  },

  cardIconFont: {
    fontSize: "6rem",
  },
  typography2: {
    marginTop: 15,
    padding: 4,
  },
  flexBox: {
    // backgroundColor: "#0F2D25",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
  },
  paperBoxStyles: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default useStyles;
