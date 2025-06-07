import react,{useEffect, useState} from 'react';
const target_date = new Date('2025-12-05T11:50:59');
function Count()
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
        return <div>Time's up!</div>;
    }
    return (
        <div styles={styles.container}>
            <h1 style={{justifyContent:'center', textAlign:'center',alignContent:'center',alignItems:'center'}}>Countdown Timer</h1>
            <div styles={styles.timer}>
                <TimeBox label ="Days" value={timeLeft.days} />
                <TimeBox label ="Hours"value={timeLeft.hours} />
                <TimeBox label ="Minutes" value={timeLeft.minutes}/>  
                <TimeBox label="Seconds" value={timeLeft.seconds}/> 
            </div>
        </div>
    )

   
}
const TimeBox = ({label, value}) => (
    <div style={styles.timeBox}>
        <span style={styles.timevalue}>{value.toString().padStart(2,"0")}</span>
        <span style={styles.timelabel}>{label}</span>
    </div>

)
const styles = {
    timeBox: {
        display: 'flex',
        backgroundColor: 'purple',
        borderRadius: '8px',
        textAlign: 'center',
        boxshadow: '0 2px 4px rgba(138, 65, 235, 0.1)',
        width: '100px',
        alignItems: 'center',
        color:'white',
        margin:'0 auto',
        marginTop:'10px',
        flexDirection: 'column',

        padding :'10px'

    },
    timevalue: {
        fontSize: '2em',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color : 'darkblue',
        alignItems:'center',
        flexDirection:'row'
    },
    timelabel: {
        display: 'block',
        marginTop: '5px',
        fontSize: '1.2em',
        fontFamily: 'Arial, sans-serif',
        color: 'white'
    },
    timer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        marginTop: '20px',
        padding: '20px',
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '20px',
        marginTop: '20px',
        padding: '20px',
        backgroundColor:"#e0e0e0",
        borderRadius: '10px',
        color: 'black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width:"200px",
        
    }
};
export default Count;