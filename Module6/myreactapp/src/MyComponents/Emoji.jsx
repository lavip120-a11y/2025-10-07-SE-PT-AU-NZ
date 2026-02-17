import { useContext } from "react";
import { MoodContext } from "./MoodProvider";
import "../App.css";

// initial mood is happy, setmood (in moodProvider) updates the mood based on user entry
function Emoji() {
const { emoji, handleUpdateMood } = useContext(MoodContext);

return (
    <>
    <h3>Emoji.jsx with context</h3>
    
<div className="emoji-component">Current Mood: {emoji}</div>
{/* onclick interacts with changeMood */}
<button className="changemood-button" onClick={handleUpdateMood}>Change Mood</button>
</>
);
}
export default Emoji;