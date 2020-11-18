function MainImage(props) {
    console.log(props);
    return (
        <div className="col col-xl-8 col-lg-12 img-cont">
            <img width="100%" src={props.url} alt="placeholder" />
        </div>
    );
  }
  
  export default MainImage;