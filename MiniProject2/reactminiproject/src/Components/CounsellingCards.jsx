import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "Tau Awhi Mens Centre",
    description: "Mens Counselling and Programmes.",
  },
  {
    id: 2,
    title: "Te Hapara Family Services",
    description: "Counselling, social work, grief and loss programmes ...",
  },
  {
    id: 3,
    title: "Barnardo's Aotearoa",
    description: "Social Support services for children and whanau.",
  },
  {
    id: 4,
    title: "Tau Awhi Mens Centre",
    description: "Mens Counselling and Programmes.",
  },
  {
    id: 5,
    title: "Te Hapara Family Services",
    description: "Counselling, social work, grief and loss programmes ...",
  },
];

function CounsellingCards() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default CounsellingCards;
