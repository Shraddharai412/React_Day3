import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function User(){
        const navigate = useNavigate();
        const [users,setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
        const[error, setError] = useState(null);
        useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then((res) => {
                    if(!res.ok){
                        throw new Error("Error Occured");
                    }
                    return res.json()
                })
                .then((data)=>{
                    setUsers(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                })
        },[]);
        if(loading){
            return <p>Loading user details...</p>
        }
        if(error){
            return <p>Error: {error}</p>
        }
        return(
            <>
            <h2>Users List</h2>
            <table border='1' cellPadding='10' cellSpacing='0' style={{width:'100%', textAlign:'left' , backgroundColor:'plum', marginTop:'20px'}}>
                <thead border='1' cellPadding='10' cellSpacing='0' style={{width:'100%', textAlign:'left' , backgroundColor:'plum', marginTop:'20px'}}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody border='1' cellPadding='10' cellSpacing='0' style={{width:'100%', textAlign:'left' , backgroundColor:'white', marginTop:'20px'}}>
                    {users.map((user)=> (
                        <tr key={user.id}
                            onClick={()=> navigate(`/users/${user.id}`)}
                            style={{cursor:"pointer"}}
                            title="click to view" >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
}

export default User;