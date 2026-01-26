function Student({ firstName, lastName = "Unknown", children }) {
    return (
        <>
        <h1>Student</h1>
        <div>
        <label>FirstName: {firstName}</label>
        </div>
        <div>
        <label>LastName: {lastName}</label>
        </div>
        <div>{children}</div> {/* render the child element(s) passed to the Student component */}
        </>
    );
}
export default Student;

// props is a variable, it is also a reserved word in JavaScript, it contains all the attributes passed to the component
// here firstName and lastName are passed as attributes to the Student component from App.jsx
//destructured the props object directly in the function parameter list for easier access to firstName and lastName
// children is a special prop that contains any child elements passed to the component
//can assign a default as per lastName = "Unknown" above in case no lastName prop is passed