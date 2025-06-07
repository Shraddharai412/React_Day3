import React,{useState,useEffect, use} from "react"

const FocusInput =() =>{

    const inputRef = React.useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Focus on me!" />
        </div>
    );
}
export default FocusInput;