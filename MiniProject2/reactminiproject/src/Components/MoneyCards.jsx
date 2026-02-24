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
    title: "Moni Ora",
    description: "Free financial mentoring services.",
    link: "https://www.moniora.org.nz/",
  },
  {
    id: 2,
    title: "SuperGrans",
    description:
      "Supporting whanau who need a helping hand to live well and flourish",
    link: "https://www.supergranstairawhiti.nz/",
  },
  {
    id: 3,
    title: "Sorted.org.nz",
    description: "Your independent money guide.",
    link: "https://sorted.org.nz/tools/",
  },
  {
    id: 4,
    title: "Tau Awhi Mens Centre",
    description: "Mens Counselling and Programmes.",
    link: "https://www.tauawhi.org/",
  },
];

function MoneyCards({ searchTerm }) {
  const [selectedCard, setSelectedCard] = React.useState(0);

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
        mt: 4,
      }}
    >
      {filterCards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            component={Link}
            to={card.link}
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

export default MoneyCards;
