import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "#0F2D25",
    color: "white",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: 10,
    // },
  },

  headerinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
    minHeight: "100vh",
  },
  headerIcon: {
    color: "white",
    fontSize: 100,
  },
  headerBoxText: {
    mt: 3,
  },
  typography: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  secondaryBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  },

  formContainer: {
    margin: "10px 30px",
    width: "80%",
    justifyContent: "space-evenly",
    align: "center",
  },

  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,

    borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "3.5rem",
    width: "10rem",
  },
  middleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "70vh",
    width: "100vw",
    background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
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
    backgroundColor: "#0F2D25",
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
  innerpaperBox: {
    margin: "0 50px",
  },

  gridBox: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
  },
  gridBoxinner: {
    width: "80%",
  },
  formcontrol2: {
    width: "60%",
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 20,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));

export default useStyles;
