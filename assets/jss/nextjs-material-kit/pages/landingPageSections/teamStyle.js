import { cardTitle, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    textAlign: "center",
    ...cardTitle
  },
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    padding: "0 !important",
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  "@media (max-width:800px)": {
    customImgStyle: {
      width: "80%",
      margin: "auto",
      display: "block"
    },
    title: {
      fontSize: "2rem",
      textAlign: "center"
    }
  }
};

export default teamStyle;
