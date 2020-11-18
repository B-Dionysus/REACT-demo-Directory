 function Directory(props) {
   return (
    <div className="row">

        {
            props.dir.map(elem=>(
                <h5>{elem.name.title} {elem.name.first} {elem.name.last}</h5>
            ))
        }
    </div>

   );
 }
 
 export default Directory;