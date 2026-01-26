import NamePart from "./NamePart"
import Message from "./Message";
function FullName({firstName, lastName, children}) { //destructuring props directly in the function parameter
    return (
      <>
      <div>
        Full Name: <NamePart name={firstName}></NamePart>{" "} 
        <NamePart name={lastName}></NamePart>
        </div>
        <div>
        <Message text={children}></Message> 
        {/* text is the attribute of the Message component or i can do <Message>{children}</Message> 
        and then i change prop to childern in the message.jsx */}
        </div>
        </> 
    );
    }
    export default FullName;