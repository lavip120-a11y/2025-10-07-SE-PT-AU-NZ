import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../Context/UserProvider";

export default function ActionAreaCard() {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);

    const handleClick = () => {
        console.log("clicked");
        if (currentUser && currentUser.name) {
            navigate("/rates");
        } else {
            navigate("/login");
        }
    };
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image="../src/assets/Bitcoin-price-Bull2-1.webp"
          alt="bitcoin rates"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Rates
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Login to access Bitcoin Rates and convert currency.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
