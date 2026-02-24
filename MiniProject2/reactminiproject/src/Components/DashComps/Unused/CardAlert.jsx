import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "Elder Care",
    description: "Information for the retired and nearing retirment.",
    path: "/elder",
  },

  {
    id: 2,
    title: "Money",
    description: "Basic Financial tips and information.",
    path: "/money",
  },

  {
    id: 3,
    title: "Counselling & Programmes",
    description: "Access ersonal counselling and programmes.",
    path: "/counselling",
  },
  {
    id: 4,
    title: "Advocacy Services",
    description: "Options for advocacy support.",
    path: "/advocacy",
  },
  {
    id: 5,
    title: "Chat Forum",
    description: "Questions and Answers",
    path: "/chat",
  },
];

export default function CardAlert() {
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
