import NavBar from "./components/NavBar"
import Directory from "./components/Directory"
import Info from "./components/Info"
import Search from "./components/Search"
import MainImage from "./components/MainImage"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
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
                  <Directory />
            </div>
        </div>
    </div>
  );
}

export default App;
