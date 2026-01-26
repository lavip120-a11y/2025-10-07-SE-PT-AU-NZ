import SimpleForm from "./MyComponents/SimpleForm";
export function SecondComponent() { //define the component
    //return some jsx
return (
    <>
    <h2>Second Component</h2>
    <button onClick={() => alert("Hello from second component")}> 
    Submit</button>
    <SimpleForm></SimpleForm> {/* reuse the SimpleForm component here as well, child of both FirstComponent and SecondComponent */}
    </>
);
}

export function SubSecondComponent() {
    return (
        <>
        <h3>Sub Second Component</h3>
        </>
    );
}   

//use the export function above rather than default if you want to export multiple components from the same file
//two components are defined in this file - SecondComponent and SubSecondComponent