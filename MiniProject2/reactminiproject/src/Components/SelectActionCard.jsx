import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "Elder Care",
    description:
      "Helpful Information for the elderly and those reaching retirement.",
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
    description:
      "Where to go to access support for personal counselling and programmes.",
    path: "/counselling",
  },
  {
    id: 4,
    title: "Advocacy Services",
    description: "Options available for advocacy support.",
    path: "/advocacy",
  },
  {
    id: 5,
    title: "Chat Forum",
    description:
      "See what others are asking for and how they got what they needed. Options to provide advice from your own experiences",
    path: "/chat",
  },
  {
    id: 6,
    title: "DashBoard",
    description: "Data Captured from this website.",
    path: "/dash",
  },
];

function SelectActionCard({ searchTerm = "" }) {
  //default to an empty string so searchTerm is not undefined
  const [selectedCard, setSelectedCard] = React.useState(0);

  //filtering cards using ? to prevent an error if the title is missing

  const filterCards = cards.filter((card) =>
    card.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {filterCards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            component={Link}
            to={card.path} //navigating to the card path via a link rather than using navigate
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
