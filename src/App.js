import NavBar from "./components/NavBar"
import Directory from "./components/Directory"
import Info from "./components/Info"
import Search from "./components/Search"
import MainImage from "./components/MainImage"
import API from "./utils/API"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react"

class App extends Component {
  state={
    dir:[],
    image:"https://via.placeholder.com/150",
    info:{}
  };
  
  componentDidMount(){
    this.loadDir();
  }

  loadDir=()=>{
    API.getAllUsers(30)
    .then(res=>{
      this.setState({dir:res.data.results});
      this.loadEmployee(res.data.results[0])
    });
  }
  loadEmployee=data=>{
    this.handleImage(data.picture.large);
    this.handleInfo(data)
  }
  handleInfo=data=>{
    this.setState({info:data});
  }
  handleImage=(url)=>{
    this.setState({image:url});
  }
render(){
    return (
      <div className="container">
          <div className="row">
              <div className="col col-sm-8 order-sm-2 info-cont" id="display">
                  <div className="row ">
                    <MainImage url={this.state.image}/>
                    <Info info={this.state.info}/>
                  </div>
                    <Search />
              </div>
              <div className="col col-sm-4 order-sm-1 dir-cont" id="directory">
                  <div className="row">
                      <NavBar />                   
                  </div>
                    <Directory dir={this.state.dir} loadEmployee={this.loadEmployee}/>
              </div>
          </div>
      </div>
    );  
  }
}

export default App;
