import { title } from "assets/jss/nextjs-material-kit.js";

const productStyle = {
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
  description: {
    color: "#999"
  },
  mockupcontainer: {
    position: "relative",
    margin: "4rem 0 5rem",
    height: "60vh",
    width: "100%"
  },
  mockupbg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px",
    objectPosition: "left"
  },
  mockupimgcontainer: {
    position: "absolute",
    right: "0",
    width: "43%",
    height: "100%",
    display: "flex",
    top: "0",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  mockupblock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "1rem"
  },
  mockupimg: {
    width: "65%"
  },
  mockuptext: {
    position: "absolute",
    right: "10rem",
    fontSize: "1.3rem",
    width: "52%",
    textAlign: "left",
    left: "2.5rem",
    marginTop: "2.5rem",
  },
  "@media (max-width:800px)": {
    mockupimgcontainer: {
      display: "none"
    },
    section: {
      padding: "0 0 60px"
    }
  }
};

export default productStyle;
