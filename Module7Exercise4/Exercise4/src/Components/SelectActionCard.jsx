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
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Young Persons",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Money",
    description: "Humans depend on plants and animals for survival.",
  },

  {
    id: 4,
    title: "Education",
    description: "Humans depend on plants and animals for survival.",
  },

  {
    id: 5,
    title: "Counselling & Programmes",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 6,
    title: "Other",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 7,
    title: "Counselling & Programmes",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 8,
    title: "Other",
    description: "Humans depend on plants and animals for survival.",
  },
];

function SelectActionCard() {
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

export default SelectActionCard;
