import SimpleForm from "./MyComponents/SimpleForm";

function FirstComponent () { //declare the component function
    // return the jsx to be rendered
return (
    <>
    <h1>My First React Component</h1>
    <SimpleForm></SimpleForm> {/* inject the SimpleForm component - reuseable components */}
    </>
);
}

export default FirstComponent; // export the component this way if you have only one export (default export)


// give the function the same name as the file name FirstComponent.jsx
// The App compnent is the parent of all the components.  Every Component that is created should be under the App component.
// SimpleForm is a child of FirstComponent.  It is imported into FirstComponent and used here.


