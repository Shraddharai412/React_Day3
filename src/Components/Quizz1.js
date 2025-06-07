import react,{useState} from 'react';
const quizQuestions=[
    {
        id:1,
        question:"What is the capital of India?",
        options:["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer:"Delhi"
    },
    {

        id :2,
        question:"MERN stands for?",
        options:["MongoDB, Express, React, Node.js", 
            "MySQL, Express, React, Node.js",
             "MongoDB, Express, Ruby, Node.js", 
             "MySQL, Express, Ruby, Node.js"],
        answer:"MongoDB, Express, React, Node.js"
    },
    {
        id:3,
        question:"Which of the following is a JavaScript framework?",
        options:["Django", "Flask", "React", "Ruby on Rails"],
        answer:"React"
    },
    {
        id:4,
        question:"What does CSS stand for?",
        options:["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer:"Cascading Style Sheets"
    },
    {
        id:5,
        question:"Which HTML tag is used to define an internal style sheet?",
        options:["<style>", "<css>", "<script>", "<link>"],
        answer:"<style>"
    }


]
function Quiz()
{
    const[selectedOption,setSelectedOption]=useState({});
    const[showResult,setShowResult]=useState(false);
    const handleChange=(questionId,option)=>{
        setSelectedOption({
            ...selectedOption,
            [questionId]: option
        });
    }
    const handleSubmit=(e)=>{
         e.preventDefault();
        setShowResult(true);
    }
    const calculateScore=()=>{
        let score=0;
        quizQuestions.forEach((question)=>{
            const selectedidx = selectedOption[question.id];
            if(question.options[selectedidx]===question.answer)
            {
                score++;
            }
        });
        return score;
    }
    return (
        <div style={{padding: '20px',width: '400px', margin: 'auto',fontFamily: 'Arial, sans-serif'}}>
            <h1>InteractiveQuiz</h1>
            <form onSubmit={handleSubmit}>
                {quizQuestions.map((question)=>(
                    <div key={question.id} style={{marginBottom: '20px',padding: '10px', border: '1px solid #ccc', borderRadius: '5px',backgroundColor: showResult?question.options[selectedOption[question.id]]===question.answer ?"#ABDCAF":'lightcoral':'#fff'}}>
                        <h3>{question.question}</h3>
                        {question.options.map((option,idx)=>(
                            <label key={idx} style={{marginBottom: '10px',display: 'flex', alignItems: 'center',curser: 'pointer',color: showResult && question.options[idx]=== question.answer?'green':showResult && selectedOption[question.id] === idx && question.options[idx]!== question.answer?'red':'#000'}}>
                                <input 
                                    type="radio" 
                                    name={`question-${question.id}`} 
                                    value={idx} 
                                    disabled={showResult}
                                    checked={selectedOption[question.id]===idx}
                                    onChange={()=>handleChange(question.id, idx)}
                                    style={{marginBottom: '5px', marginRight: '10px'}}
                                />
                                {option}
                            </label>
                        ))}
                  
                    
                    </div>
                 
                ))}
                 {!showResult && (
                        <button 
                            type="submit" 
                            disabled={Object.keys(selectedOption).length !== quizQuestions.length}
                            style={{marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                            
                            Submit</button>
                    )
                    }
                
            
           
            </form>
           
                    {showResult && (
                        <div style={{marginTop: '20px'}}>
                            <h4>Your Score: {calculateScore()} out of {quizQuestions.length}</h4>
                            <p>{calculateScore () === quizQuestions.length ? "Great Job" :" Bettter Luck next Time"} </p>
                        </div>
                    )}
        </div>
    )
    



}
export default Quiz;