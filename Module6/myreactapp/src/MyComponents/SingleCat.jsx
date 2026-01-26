import "../App.css";
function SingleCat({ name, latinName, image }) {
  return (
    <>
       <li>
 <h3>{name}</h3> <span>({latinName})</span>
      <div><img src={image} /></div>
       </li>
     </>
  );
}
export default SingleCat;