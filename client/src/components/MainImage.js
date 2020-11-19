function MainImage(props) {
    const imageStyle = {
        backgroundImage: `url(${props.url})`,
        height:"100%",
        width:"100%",
        backgroundSize:" cover",
        filter: "sepia(1)"
      };
      // Each profile pic is displayed as the background image of a div, rather than as an img element.
      // This allows us to more easily control the width while being responsive to different screen sizes.
    return (
        <div className="col-12 col-md-7  col-sm-12 img-cont">
            <div style={imageStyle}/>
        </div>
    );
  }
  
  export default MainImage;