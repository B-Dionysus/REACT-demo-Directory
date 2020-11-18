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
    dir:[]
  };
  
  componentDidMount(){
    this.loadDir();
  }

  loadDir=()=>{
    API.getAllUsers()
    .then(res=>{
      this.setState({dir:res.data.results});
      console.log(this.state.dir);
    });
  }

render(){
    return (
      <div className="container">
          <div className="row">
              <div className="col col-lg-6 order-sm-2" id="display">
                  <div className="row">
                    <MainImage />
                    <Info />
                  </div>
                    <Search />
              </div>
              <div className="col col-lg-6 order-sm-1" id="directory">
                  <div className="row">
                      <NavBar />                   
                  </div>
                    <Directory dir={this.state.dir}/>
              </div>
          </div>
      </div>
    );  
  }
}

export default App;
