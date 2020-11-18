function MainImage(props) {
    console.log(props);
    return (
        <div className="col col-lg-8 img-cont">
            <img width="100%" src={props.url} alt="placeholder" />
        </div>
    );
  }
  
  export default MainImage;