import { useState, useEffect } from "react";
import axios from "axios";

import { Box } from "@mui/material";
import { Container, Card, CardContent, CardActions } from "@mui/material";
import { TextField, Button } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { Typography } from "@mui/material";

export default function ForumPage() {
  //useState hooks stores all posts - setPosts updates posts array
  const [posts, setPosts] = useState([]);
  //store new posts from user and adds to posts. resets.
  const [newPost, setNewPost] = useState("");

  //load posts from external API just as an example until i can make a database the stores data from the user interactions
  useEffect(() => {
    axios //fetching posts from external API
      .get("http://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        //returns a promise
        const postsWithComments = res.data.map((post) => ({
          ...post, //copying fields to post
          comments: [], // This is to add comments because the API does not have comments.
        }));
        setPosts(postsWithComments); //calling setPosts will update posts and load new posts
      });
  }, []); // useEffect runs once because of the empty array, when the component has loaded

  // handler for new posts, removes extra spaces, if the post is empty does not add it.
  const handleAddPost = () => {
    if (!newPost.trim()) return;

    //add a new post
    const post = {
      id: Date.now(), //timestamp as id
      title: newPost, //text from user
      body: "User Post", //jsonPlaceholder content
      comments: [], //empty array for comments
    };
    setPosts((prevPosts) => [post, ...prevPosts]); // prevPosts creates a new array of new posts and previous posts.
    setNewPost(""); //clearing input field
  };

  return (
    // medium width container with top and bottom margins
    <Container maxWidth="md">
      <Box my={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          Chat Forum
        </Typography>

        {/* adding a new post */}
        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            label="Share a post or ask a question"
            // newPost updates the textfield
            value={newPost}
            // updates state with users new post
            onChange={(e) => setNewPost(e.target.value)}
          ></TextField>
          {/* on click handleAddPost is called and adds the new post */}
          <Button variant="contained" onClick={handleAddPost}>
            Post
          </Button>
        </Box>

        {/* generating posts */}
        {/* posts.map loops over the posts from useState, creates a new array - in the future it will be stored in database */}
        {posts.map((post) => (
          <PostCard //child component of posts, receiving props from post, posts and setPosts
            key={post.id} //identification for the post
            post={post} //individual post which populates postCard
            posts={posts} //posts array which postCard accesses
            setPosts={setPosts} // setPosts function updates state and is passed as a prop for children to use if needed.
          />
        ))}
      </Box>
    </Container>
  );
}

function PostCard({ post, posts, setPosts }) {
  const [comment, setComment] = useState("");
  const [editing, setEditing] = useState(false); // default false - not editing
  const [editText, setEditText] = useState(post.title); //storing the original post

  //adding a comment to a post
  const handleAddComment = () => {
    if (!comment.trim()) return;
    //updating posts, starts with posts array, map loops through and returns new array
    const updatedPosts = posts.map((p) =>
      //checking the id, is this the post we want to comment on? if not keep the original.
      p.id === post.id
        ? {
            ...p, //copy post
            comments: [
              //create a new array
              ...p.comments, //include comments
              //new comment object
              {
                id: Date.now(),
                text: comment,
              },
            ],
          }
        : p,
    );
    setPosts(updatedPosts); //updating posts using setPosts
    setComment(""); //clears the input field
  };

  //Delete Post
  const handleDeletePost = () => {
    //filtering posts, returning all posts without the one that matches the id. setPosts updates posts
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  //save the edited post
  const handleSaveEdit = () => {
    //map returning new array
    const updatedPosts = posts.map((p) =>
      //if the post id matches, create a new post by copying everything in the original post and replacing title with editText.
      p.id === post.id ? { ...p, title: editText } : p,
    );

    setPosts(updatedPosts); //updates original posts with the updatedPosts
    setEditing(false); //returns to default - not editing
  };

  return (
    // card and cardContent container with spacing around the posts
    <Card sx={{ mb: 2 }}>
      <CardContent>
        {/* if editing, show input field and save button */}
        {editing ? (
          <Box display="flex" gap={2} mb={1}>
            <TextField //editText is updated by setEditText
              fullWidth
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />

            <Button variant="contained" size="small" onClick={handleSaveEdit}>
              Save
            </Button>
          </Box>
        ) : (
          //if not editing, show title
          <Typography variant="h6">{post.title}</Typography>
        )}
        {/* show the post body */}
        <Typography color="text.secondary">{post.body}</Typography>
        {/* edit and delete buttons */}
        <Box mt={1} mb={2}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setEditing(!editing)}
            sx={{ mr: 1 }}
          >
            {editing ? "Cancel" : "Edit"}
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={handleDeletePost}
          >
            Delete
          </Button>
        </Box>

        {/* Comments List */}
        <List>
          {/* looping over the post comments and returning a listItem - uses id to identify between comments */}
          {post.comments.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemText primary={comment.text} />
            </ListItem>
          ))}
        </List>
        {/* Add Comment Input field - box with textfield and button in a row, spacing and margintop */}
        <Box display="flex" gap={2} mt={2}>
          <TextField
            fullWidth
            label="Add a comment"
            value={comment} //shows original comment stored in state
            onChange={(e) => setComment(e.target.value)} //updates state
          />
          {/* onclick calls handleAddComment function which updates state and clears textfield. */}
          <Button variant="outlined" size="small" onClick={handleAddComment}>
            Comment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
