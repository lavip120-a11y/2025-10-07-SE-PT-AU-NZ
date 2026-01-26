// child of FirstComponent.jsx. imported into FirstComponent.jsx and used there

function SimpleForm() {
    return (
        <>
        <form>
            <div>
                <label>
                    First Name :
                    <input type="text"></input>
                    </label>
                    </div>
                    <div>
                <label>
                    Last Name :
                    <input type="text"></input>
                    </label>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                    </form>
                    </>
    );
}
export default SimpleForm;