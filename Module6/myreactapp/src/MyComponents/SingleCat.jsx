import "../App.css";
function SingleCat({ name, latinName, image }) {
  return (
    <>
      <h3>{name}</h3>
      <span>({latinName})</span>
      <div>
        <img src={image} />
      </div>
    </>
  );
}
export default SingleCat;
