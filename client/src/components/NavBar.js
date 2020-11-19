 function NavBar(props) {
   return (
     <div className="col navCont">
       Sort: <div  style={{cursor:"pointer"}} onClick={props.firstSort}>First</div> | 
       <div style={{cursor:"pointer"}} onClick={props.lastSort}>Last</div> | 
       <div  style={{cursor:"pointer"}}onClick={props.ageSort}>Age</div>
     </div> 
   );
 }
 
 export default NavBar;