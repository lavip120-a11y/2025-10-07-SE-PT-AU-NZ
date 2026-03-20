import CustomCard from "./CustomCard";
import BasicGrid from "./BasicGrid";
import MUIForm from "./MUIForm";
import MUIDialog from "./MUIDialogue";
import SxExample from "./SXExample";
import StyledUtility from "./StyledUtility";

export default function Homepage() { 
    const students = [
        {firstName: "Bill", location: "Sydney", img: "https://mui.com/static/images/cards/contemplative-reptile.jpg"},
        {firstName: "Billy", location: "Spain", img: "https://mui.com/static/images/cards/contemplative-reptile.jpg"},
        {firstName: "Will", location: "Canada", img: "https://mui.com/static/images/cards/contemplative-reptile.jpg"},
    ];

return (
    <>
<div className="Homepage">
<h1>Welcome to my home page</h1>
<StyledUtility></StyledUtility> 
<SxExample></SxExample>
<MUIForm></MUIForm>
<MUIDialog text="My first MUI Dialog"></MUIDialog>
<h2>Custom Card</h2>
{students.map((student) => {
<CustomCard title={student.firstName} picture={student.img}></CustomCard>
})}
</div>
<div>
<BasicGrid></BasicGrid>
</div>
</>
);
}

