import { Box } from '@mui/material';
import { styled } from '@mui/system';

const styles = ({theme}) => ({
color: theme.palette.primary.contrastText,
backgroundColor: theme.palette.primary.main,
padding: '2em',
//borderRadius: '1em',
border: `2px solid ${theme.palette.primary.contrastText}`,
margin: '1em 0'
});

const StyledDiv = styled('div')(styles);
const StyledBox = styled(Box)(styles);

export default function BasicUsage() {
return (
<>
<StyledBox>Your contribution to this site may support others in a similar situation to you, your input is valuable. 
    Thankyou for visiting.</StyledBox>
<StyledDiv>Login for additional information, make contact or access the chat forum</StyledDiv>

</>
);
}
