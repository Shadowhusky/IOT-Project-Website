const videoStyle = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    padding: "5rem 0px 5rem"
  },
  video: {
   borderRadius: "20px",
   width: "25rem",
   height: "17.5rem"
  },
  "@media (max-width:800px)": {
    section: {
      margin: "5px auto 60px",
      padding: "0",
      height: "200px",
      width: "100%"
    },
    video: {
      width: "100%",
      height: "100%"
    }
  }
};

export default videoStyle;
