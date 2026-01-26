// destructures props object into 3 variables, two with defaults
function City({name, state = 'NSW', country = 'Australia'}) {
const data = ["first", "second"];
// conditional rendering using ternary operator checking if true or false (boolean)
data ? console.log("data is present") : console.log("data is empty");

return (
    <>
    <div>
<strong>{name}</strong> is in {state}, {country}
</div>
    </>
);
}

export default City;