
import react ,{useState, useEffect} from 'react';

const UserList = () => {
const[users,setUsers]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        if(!res.ok){
            throw new Error('Network is not ok');

        }
        return res.json();
    })
    .then((data) => {
        setUsers(data);
        setLoading(false);
    })
    .catch((err) =>{
        setError(error.message);
        setLoading(false);
    },[]);//EMPTY Depenedancy Array
    


}
)
if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <div style={{color:'red'}}>Error:{error}</div>
    }
    return(
        <ul>
            {users.map((user) =>(
                <li key={users.id}>
                    <strong>{user.name}</strong>
                     ({user.email})
                     </li>

            ))}
        </ul>
    )
}
export default UserList;