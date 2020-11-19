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

// There are four items in the state. image is the profile pic of the current user (set to a placeholder initially)
// info is the user data, which is initially an empty object. 
// originalDir is the full array of user objects, downloaded once from randomusers.me
// displayDir is the array of user objects that we are current displaying in the list. This array can be sorted,
// filtered, and otherwise changed, while originalDir remains intact.
class App extends Component {
  state={
    originalDir:[],
    displayDir:[],
    image:"https://via.placeholder.com/150",
    info:{}
  };
  // This first thing to do once the component is up and running it to load the employee array from randomuser.me
  componentDidMount(){
    this.loadDir();
  }

  // loadDir calls getAllUsers from API.js, and specifies that we want 30 names
  // Then it sets the displayDir and the originalDir to the array, and loads the first employee in the array
  loadDir=()=>{
    API.getAllUsers(30)
    .then(res=>{
      this.setState({originalDir:res.data.results});
      this.setState({displayDir:res.data.results});
      this.loadEmployee(res.data.results[0])
    })
    .catch(err=>{
      // Sometimes the API fails to load, but most of the time it works. So when it fails, I'm
      // Just submitting it again. This seems like a slightly sketchy way to resolve the errors, but
      // it's working pretty well!
      console.log("Error loading employees: "+err);
      this.loadDir();
    });
  }
  // When the user clicks on an employee, this triggers, displaying the new image and info
  loadEmployee=data=>{
    this.handleImage(data.picture.large);
    this.handleInfo(data)
  }
  // Called form loadEmpoloyee, this updates the state with the new employee info
  handleInfo=data=>{
    this.setState({info:data});
  }
  // Called form loadEmpoloyee, this updates the state with the new employee image
  handleImage=(url)=>{
    this.setState({image:url});
  }
  // When the user makes a change to the search bar
  searchHandler=e=>{
    let newDir=this.state.originalDir;
    let needle=e.target.value;
    // We have a copy of the full array, and we compare the letters in the search bar (which we are
    // calling "needle") with the first letters of the first name, and then the last name, in each
    // employee in order to filter the display list down to only what the user is search for.
    newDir=newDir.filter((elem)=>{
      if(elem.name.first.substring(0,needle.length).toLowerCase()===needle)
        return true;
      else if(elem.name.last.substring(0,needle.length).toLowerCase()===needle)  
        return true;
      else return false;
    })
    this.setState({displayDir:newDir})
  }
  // There are three ways the user can sort the display list: age, first name, and last name
  // sort is expecting either a positive or a negative number, to determine whether the first
  // or the second element belong at the top
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

// Here we rend the full page
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
