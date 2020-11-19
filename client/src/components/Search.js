function Search(props) {
    return (
        <div className="row search">
            Search:<input id="searchInput" onChange={props.searchHandler}/>
        </div>
    );
  }
  
  export default Search;