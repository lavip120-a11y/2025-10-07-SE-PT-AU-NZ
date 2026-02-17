import { createContext, useState } from "react";

export const MoodContext = createContext(); //first step is to create a context 

export function MoodProvider(props) { //provider component 
const [mood, setMood] = useState("happy");

//updates and calls setMood to update the mood in state
function handleUpdateMood() {
setMood(prevMood => prevMood === "happy" ? "sad" : "happy" );
}  

const emoji = mood === 'happy' ? '😊' : '😢';

//provides all the props to the all children of this MoodProvider component. 
return (  
<MoodContext.Provider value = {{ mood, emoji, handleUpdateMood }}>
    {props.children}
</MoodContext.Provider>
    );
   }