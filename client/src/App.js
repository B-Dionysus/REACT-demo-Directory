import NavBar from "./components/NavBar"
import Directory from "./components/Directory"
import Info from "./components/Info"
import Search from "./components/Search"
import Scanlines from "./components/Scanlines"
import MainImage from "./components/MainImage"
import API from "./utils/API"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react"

class App extends Component {
  state={
    originalDir:[],
    displayDir:[],
    image:"https://via.placeholder.com/150",
    info:{}
  };
  // This first thing to do once the component is up and running it to load the first
  // employee
  componentDidMount(){
    this.loadDir();
  }

  loadDir=()=>{
    API.getAllUsers(30)
    .then(res=>{
      this.setState({originalDir:res.data.results});
      this.setState({displayDir:res.data.results});
      this.loadEmployee(res.data.results[0])
    })
    .catch(err=>{
      console.log(err);
      this.loadDir();
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
  searchHandler=e=>{
    let newDir=this.state.originalDir;
    let needle=e.target.value;
    
    newDir=newDir.filter((elem)=>{
      if(elem.name.first.substring(0,needle.length).toLowerCase()===needle)
        return true;
      else if(elem.name.last.substring(0,needle.length).toLowerCase()===needle)  
        return true;
      else return false;
    })
    this.setState({displayDir:newDir})
  }
  sortDir=cat=>{
    let newDir=this.state.displayDir;
    newDir=newDir.sort((a, b)=>{
      switch(cat){
        case "age":
          return a.dob.age-b.dob.age;
          break;
        case "first":
          if(a.name.first.toLowerCase()>b.name.first.toLowerCase()) return 1;
          else return -1;
          break;
        case "last":
          if(a.name.last.toLowerCase()>b.name.last.toLowerCase()) return 1;
          else return -1;
          break;
        default:
          return 1;
      }
    })
    this.setState({displayDir:newDir})
  }


render(){
    return (
      <div className="container">
          <div className="row main">
          <Scanlines />
              <div className="col-12 col-md-9 order-md-2 info-cont" id="display">
                  <div className="row ">
                    <MainImage url={this.state.image}/>
                    <Info info={this.state.info}/>
                  </div>
                    <Search  searchHandler={this.searchHandler}/>
              </div>
              <div className="col-12 col-md-3 order-md-1 dir-cont" id="directory">
                  <div className="row">
                      <NavBar ageSort={()=>this.sortDir("age")} firstSort={()=>this.sortDir("first")} lastSort={()=>this.sortDir("last")}/>                   
                  </div>
                    <Directory dir={this.state.displayDir} loadEmployee={this.loadEmployee}/>
              </div>
          </div>
      </div>
    );  
  }
}

export default App;
