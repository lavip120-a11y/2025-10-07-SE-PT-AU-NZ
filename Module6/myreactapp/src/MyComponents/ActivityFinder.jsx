import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { MyThemeContext } from "./MyThemeProvider";


function ActivityFinder() {
  // Fetches a random activity, useState default is 1. fetch gets the activity based on the participant. useEffect updates the activity.
  const [participants, setParticipants] = useState(1);
  const { currentUser } = useContext(UserContext);
  const { theme } = useContext(MyThemeContext);

  const data = useData('https://bored.api.lewagon.com/api/activity?participants=' + participants);
// get the activity from the json or show error message if not found
  const activity = data ? data.activity : 'not found';
  
  return ( //jsx. partcipant value onchange updates the setParticipants and returns the new value and runs useEffect again
    <>
    {currentUser.user ? (
    <div style={{ backgroungColor: theme.background }}>
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>)
  : (<p>No user has logged in</p>)}
  </>
  );
}
export default ActivityFinder;