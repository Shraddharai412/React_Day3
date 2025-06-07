import react from 'react';
import {Link} from 'react-router-dom';

const Navbar =( ) => {
    return(
        <nav style={{backgroundColor:'lightblue', padding:'10px', display:'flex',justifyContent:'space-around',hover:{backgroundColor:'lightgreen'}}}>
           
           <Link to ="/" style={{textDecoration:'none', color:'black',margin:'10px',alignContent:'center',display:'flex',hover:{backgroundColor:'red'}}}>Home</Link>
           <Link  to ="/users" style={{textDecoration:'none',color:'black',margin:'10px'}}>User</Link>


        </nav>
    )
}
export default Navbar;