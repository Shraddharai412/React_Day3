import react,{useEffect, useState} from 'react';
const target_date = new Date('2025-06-07T19:45:50');
function Birthday()
{
    const calculateTimeLeft = () => {
        const now=new Date();
        const difference = target_date - now;
        if(difference<=0)
        {
            return null;
        }
        return{
            days:Math.floor(difference/(1000*60*60*24)),
            hours:Math.floor((difference/(1000*60*60))%24),
            minutes:Math.floor(difference/((1000*60))%60),
            seconds:Math.floor((difference/1000)%60)
        }

}
   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
   useEffect(() => {
    const timer=setInterval(()=>{
        const updatedTimeLeft = calculateTimeLeft();
        setTimeLeft(updatedTimeLeft);},1000);
    return () => clearInterval(timer);
    },[]);
    if(!timeLeft)
    {
        return (
        <div style={{
        margin: '10px',
        padding: '20px',
        backgroundColor: 'purple',
        borderRadius: '8px',
        textAlign: 'center',
        boxshadow: '0 2px 4px rgba(138, 65, 235, 0.1)',
        
        alignItems: 'center',
        color:'white'}}>
            <h3>Hey!! its ur Birthday</h3>
            <h1> WISH U HAPPY BIRTHDAY MY DEAR </h1>
            <img src="https://sayingimages.com/wp-content/uploads/2021/04/Happy-Birthday-Wishes.jpg.webp" alt='' width='200px' height='200px'/>
        </div>
        )
    }
    return (
        <div styles={{...styles.container , justifyContent:'center',textAlign:'center', alignContent:'center',alignItems:'center'}}>
            <h1 style={{justifyContent:'center', textAlign:'center',alignContent:'center',alignItems:'center'}}>Birthday Countdown</h1>
            <div styles={{...styles.timer , textAlign:'center',justifyContent:'center', alignContent:'center',alignItems:'center'}}>
               
                <TimeBox label ="Minutes" value={timeLeft.minutes}/>  
                <TimeBox label="Seconds" value={timeLeft.seconds}/> 
            </div>
        </div>
    )

   
}
const TimeBox = ({label, value}) => (
    <div style={{...styles.timeBox , justifyContent:'center', alignContent:'center',alignItems:'center'}}>
        <span style={styles.timevalue}>{value.toString().padStart(2,"0")}</span>
        <span style={styles.timelabel}>{label}</span>
    </div>

)
const styles = {
    timeBox: {
        display: 'flex',
        
        padding: '20px',
        backgroundColor: 'purple',
        borderRadius: '8px',
        textAlign: 'center',
        boxshadow: '0 2px 4px rgba(138, 65, 235, 0.1)',
        width: '100px',
        alignItems: 'center',
        color:'white',
        margin :'0 auto',
        marginBottom:'10px'

    },
    timevalue: {
        fontSize: '2em',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color : 'darkblue',
        alignItems:'center'
    },
    timelabel: {
        display: 'block',
        marginTop: '5px',
        fontSize: '1.2em',
        fontFamily: 'Arial, sans-serif',
       color:'white',
    },
    timer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        alignContent:'center',
        
        marginTop: '20px',
        padding: '20px',
        margin :'0 auto',

    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
        padding: '20px',
        backgroundColor:"#e0e0e0",
        borderRadius: '10px',
        color: 'black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width:"200px",
        margin :'0 auto',
        
    }
};
export default Birthday;