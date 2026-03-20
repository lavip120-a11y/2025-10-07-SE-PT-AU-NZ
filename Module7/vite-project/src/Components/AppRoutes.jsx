import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import DashboardPage, { DashboardMessages, DashboardTasks, } from "./DashBoardPage";
import PostsPage, { Post, PostList } from "./PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "./LoginForm";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto child components using {...props}
function AppRoutes() {
return (
<Routes>
{/* index "/" matches homepage URL. can use index element= also */}
<Route index element={<Homepage></Homepage>}></Route>
<Route path="/login" element={<LoginForm></LoginForm>}></Route>
<Route path="/About" element={<About></About>}></Route>
<Route path="/Contact" element={
    <ProtectedRoute><Contact></Contact></ProtectedRoute>} ></Route>
{/* nested routes - parent route with two child routes DashBoardPage, Tasks and messages. */}
<Route path="dash" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}>
<Route path="tasks" element={<DashboardTasks></DashboardTasks>}></Route>
<Route path="messages" element={<DashboardMessages></DashboardMessages>}></Route>
</Route>
{/* route path - /posts, index element is equal to / will load postlist and dynamic path for individual id */}
<Route path="/posts" element={<PostsPage></PostsPage>}>
    <Route index element={<PostList></PostList>}></Route>
    <Route path=":id" element={<Post></Post>}></Route>
</Route>
{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound></PageNotFound>}></Route>


{/* <Route path="login" element={<LoginForm/>} />  */}
</Routes>
    

);
}

export default AppRoutes;
