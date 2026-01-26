import '../App.css';           
// componentBox class styles a component into a box
// Welcome class identifies this component
//inline css uses style={{}}  double curly braces
function Welcome(props) {
return (
<div className="componentBox">
<h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome {props.name}!</h3> {/* passing the props and styling inline */}
</div>
);
}
export default Welcome;