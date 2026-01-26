import { useState } from "react";
import "../App.css";

// initial mood is happy, setmood updates the mood based on user entry
function Emoji() {
const [mood, setMood] = useState('happy');

// if the mood is happy, change it to sad else if it is sad change it to happy
const changeMood = () => {
if (mood == 'happy') 
  setMood('sad');
else if (mood == 'sad')
  setMood('happy');
}
//variables for each emoji - added into ternary operator below
// const happyEmoji = "😊";
// const sadEmoji = "😢";

return (
    <>
    <h3>Exercise 3 Emoji.jsx</h3>
    {/* ternary operator if mood is happy show the happy emoji otherwise show sad*/}
<div className="emoji-component">Current Mood: {mood == 'happy' ? '😊' : '😢'}</div>
{/* onclick interacts with changeMood */}
<button className="changemood-button" onClick={changeMood}>Change Mood</button>
</>
);
}
export default Emoji;