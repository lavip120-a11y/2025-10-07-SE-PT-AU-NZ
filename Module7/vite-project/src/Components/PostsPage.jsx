import { Outlet } from "react-router-dom";
import { useData } from "../hooks/useData";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function PostsPage() {
    return (
        <div className="Posts">
            <h1>Posts</h1>
            <Outlet /> 
        </div>
    );
}
//postsPage is the parent route of Post and PostsList and the outlet makes sure that both jsx for children are displayed
export function PostList() {

const [searchParams, setSearchParams] = useSearchParams(); // import this hook
const limit = searchParams.get('limit') ? searchParams.get('limit') : 5; //does searchparams have limit - if not use 5
  
  const postsData = useData("https://jsonplaceholder.typicode.com/posts?_limit="+limit); //append limit, otherwise use 5 (not hard coded)
  const handleChangeLimit = (e) => {
    setSearchParams({limit: e.target.value})
  }
  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <Link to='/posts?limit=10'>Load 10 Posts</Link>
    </>
  );
}

//post uses the dynamic parameter, generates a URL with the dynamic param, calls the useData.  UseData takes the URL, defines useState, uses useEffect,
//calls the fetch to get the data, stores in json in setData and returns back the data.  in this instane we are only seeking individual id.
export function Post() {
    const { id } = useSearchParams(); //custom hook to access dynamic params;
    const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
return (
    <div className="Post">
        {post ? ( 
          <>
        <h3>
            Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
            </>
            ) : ( "Loading..."
            )}
    </div>
);
}
