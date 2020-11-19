function Search(props) {
    return (
        <div className="row search">
            Search by:<input onChange={props.searchHandler}/>
        </div>
    );
  }
  
  export default Search;