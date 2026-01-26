function Greeting(props) {
    let name = "World";
    if (props.name) {
        name = props.name;
    }
return (
    <>
    <h2>Exercise 1 Greeting.jsx</h2>
<div>
<h3>
{props.name ? <p>Hello, {props.name}!</p> : <p>Hello World!</p>} {/* conditional rendering based on whether the name prop exists or not */}
</h3>
{props.children} { /* render any child elements passed to the Greeting component */}
</div>
</>
);
}
export default Greeting;