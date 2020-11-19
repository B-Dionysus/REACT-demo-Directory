 function Directory(props) {

   return (
    <div className="row dir ">

        {
            props.dir.map(elem=>(
                // {fullname=}
                <div key={elem.login.uuid} className="employee-name" onClick={()=>props.loadEmployee(elem)}>{elem.name.title+" "+elem.name.first+" "+elem.name.last}</div>
            ))
        }
    </div>

   );
 }
 
 export default Directory;