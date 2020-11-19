function MainImage(props) {
    const imageStyle = {
        backgroundImage: `url(${props.url})`,
        // height: "30vw",
        // width: "30vw",
        height:"100%",
        width:"100%",
        backgroundSize:" cover",
        filter: "sepia(1)"
      };
    //   {backgroundImage:`url(${props.url})`, width:"100%" }
    return (
        <div className="col-12 col-md-7  col-sm-12 img-cont">
            {/* <img width="100%" src={props.url} alt="placeholder" /> */}
            <div style={imageStyle}/>
        </div>
    );
  }
  
  export default MainImage;