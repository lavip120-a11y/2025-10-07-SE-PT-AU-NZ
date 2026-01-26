//best use for forms that have many fields

function SampleUncontrolledForm()
{
    function handleFormData(e) {
        e.preventDefault();

       const data = new FormData(e.target); //created an object and passed form to e.target
       
       alert(data.get("name")); //each defined name gives the value
       alert(data.get("password"));
    }
    return(
        <>
        <form>
            <div>
                <label>
                    Name:
                    <input type="text"></input>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password"></input>
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
        </>
    );
}
export default SampleUncontrolledForm