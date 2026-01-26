import "../App.css";
import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate.jsx";

function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
        <UserInfo author={props.author}></UserInfo>
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {props.text}
      </div>
        <FormattedDate date={props.date}></FormattedDate>
    </div>
  );
}
export default ComplexComment;
