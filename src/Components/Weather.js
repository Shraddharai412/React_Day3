
import react ,{useState, useEffect} from 'react';

const Weather = () => {
const[users,setUsers]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);
useEffect(()=>{
    const longitude = 77.5946; // Example longitude for Bangalore
    const latitude = 12.9716; // Example latitude for Bangalore
    fetch('https://potterapi-fedeperin.vercel.app/en/spells')
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
                <li key={users.index}>
                    <strong>{user.spell}</strong>
                     ({user.use})
                     </li>

            ))}
        </ul>
    )
}
export default Weather;