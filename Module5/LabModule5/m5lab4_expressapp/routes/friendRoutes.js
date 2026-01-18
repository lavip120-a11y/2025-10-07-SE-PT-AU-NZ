const express = require("express");
const router = express.Router();
const friends = require('../models/friends')

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R (done)
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender; 
    let firstLetter = req.query.letter;  //value of the letter
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    if (firstLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.charAt(0).toLowerCase
        () === firstLetter.toLowerCase());
    }

    if (matchingFriends.length > 0) {
        // return valid data when the gender or name matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: "No friends matching "});
    }  
         
})

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    console.log(req.headers)

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data
    // Modify this response to just return info on the user-agent, content-type and accept headers

    const contentType = req.get('content-type');
    const userAgent = req.get('user-agent');
    const accept = req.get('accept');

    console.log('content-type', contentType);
    console.log('user-agent', userAgent);
    console.log('accept', accept);

  res.json({
    contentType,
    userAgent, 
    accept
  });
});

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3 (done)
router.get('/:id', (req, res) => {
    console.log(req.params)
    let friendid = req.params.id; // 'id' here will be a value matching anything after the / in the request path

    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
let friend = friends.find(friend => friend.id == friendid)
    // Modify this response with the matched friend, or a 404 if not found
    friend ? res.status(200).json({result: 'Finding friend with ID ' + friendid})
    : res.status(404).json({ result: `Friend ${friendid} not found`})
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
});

// TODO - #4: Complete the PUT route which will update data for an existing friend
// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    let friendId = req.params.id; //dynamic request parameter fetched - extracting ID
    let updatedFriend = req.body; //new user data from the request body

    // Replace the old friend data for friendId with the new data from updatedFriend
   if (!updatedFriend.name || !updatedFriend.gender) { // !does not ||OR - does the friend have a name or a gender
return res
.status(500)
.json({error: 'Friend must contain a name and gender'});
   }

   //
 const friendindex = friends.findIndex(friend => friend.id === friendId);

    if (friendindex === -1) {
        return res
        .status(404)
        .json({error: 'Friend not found'});
}
    friends[friendindex] = {
        id: friends[friendIndex].id, ...updatedFriend
    };

    // Modify this response with the updated friend, or a 404 if not found
    return res
    .status(200)
    .json(friends[friendIndex]); 
});


module.exports = router;