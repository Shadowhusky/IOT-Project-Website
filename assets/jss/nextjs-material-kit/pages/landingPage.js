import { container, title } from "assets/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  "landingpage-animated": {
    animation: "$landingpage-appear-animation 2s"
  },
  "@media (max-width:800px)": {
    title: {
      fontSize: "2.5rem"
    },
    maincontainer: {
      padding: "0 30px"
    },
    maintext: {
      fontSize: "1.05rem"
    }
  },
  "@keyframes landingpage-appear-animation": {
    "0%": {
      opacity: 0,
      transform: "blur(20px)"
    },
    "100%": {
      opacity: 1
    }
  },
};

export default landingPageStyle;
