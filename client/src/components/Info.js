function Info(props) {
  if(props.info.name){
    return (
      <div className="col col-lg-4 info-cont">
          <div className="info" id="nameInfo">{props.info.name.title} {props.info.name.first} {props.info.name.last}</div>
          <div className="info" id="cellInfo">Cell: {props.info.cell}</div>
          <div className="info" id="emailInfo">Email: {props.info.email}</div>
          <div className="info" id="countryInfo">{props.info.location.country}</div>
      </div>

    );
  }
  else{
    return (<div></div>)
  }
}

export default Info;

// cell: "075 290 70 93"
// dob: {date: "1987-09-03T01:48:34.261Z", age: 33}
// email: "kilian.rey@example.com"
// gender: "male"
// id: {name: "AVS", value: "756.3590.7291.57"}
// location: {street: {…}, city: "Samnaun", state: "Zug", country: "Switzerland", postcode: 5063, …}
// login: {uuid: "33add37f-64e7-4a36-997d-3a4f925f4b07", username: "bluekoala388", password: "atlanta", salt: "17ltZuGl", md5: "7666b5e499e0a455aa6a10096af07b75", …}
// name: {title: "Monsieur", first: "Kilian", last: "Rey"}
// nat: "CH"
// phone: "076 737 41 54"
// picture: {large: "https://randomuser.me/api/portraits/men/50.jpg", medium: "https://randomuser.me/api/portraits/med/men/50.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg"}
// registered: {date: "2017-10-07T03:46:26.950Z", age: 3}