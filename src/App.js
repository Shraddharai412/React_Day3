import react from 'react';
import Quiz from './Components/Quizz1';
import Count from './Components/Counter';
import UserList from './Components/UserList';
import FocusInput from './Components/Focusinput';
import Weather from './Components/Weather';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import Users from './Components/Users';
import Birthday from './Components/birthdayCounter';
import ImageSliders from './Components/imageSliders';
function App()
{ //task1
    // return (
    //     <div >
    //         <Quiz />
    //     </div>
    // );
    //task 2
    // return (
    //     <div>
    //         <Count />
    //     </div>
    // );
    //tack 3
   
    // return (
    //     <div>
    //         <h1> Fetching </h1>
    //         <UserList />
    //         <h1>Focus Input</h1>
    //          <FocusInput />

    //     </div>
    // );
    //task 4
    // return (
    //     <div>
    //         <h1>Focus Input</h1>
    //         <FocusInput />
    //     </div>
    // );
 //task 5
    // return (
    //     <div>
    //         <h1>Weather App</h1>
    //         <Weather />
    //     </div>
    // );
    //task 6
     return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<div style={{padding:'20px',border:'2', backgroundColor:'lightyellow',borderradius:'5px',boxshadow:'0 2px 4px rgba(0,0,0,0.1)',display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'600px',margin:'auto',marginTop:'20px'}}><h1 style={{alignContent:'center'}}>Welcome to the Home Page</h1></div> } />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
            </Routes>
        </>
     )
    //task 7
// return(
//     <div>
       
//         <Birthday/>
//     </div>
// ) 
// return(
//     <div>
//         <Count/>
//     </div>
// )
// return(
//     <div>
//         <ImageSliders/>
//     </div>
// )


}
export default App;