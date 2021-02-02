const videoStyle = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    padding: "100px 0px 200px"
  },
  video: {
   borderRadius: "15px",
   boxShadow: "rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px",
  },
  "@media (max-width:800px)": {
    section: {
      margin: "15px auto 110px",
      padding: "0",
      height: "200px",
      width: "90%"
    },
    video: {
      width: "100%",
      height: "100%"
    }
  }
};

export default videoStyle;
