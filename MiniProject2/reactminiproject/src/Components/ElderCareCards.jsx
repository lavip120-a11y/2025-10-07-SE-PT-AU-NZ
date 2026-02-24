import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "New Zealand Super",
    description:
      "Apply for NZ Super if you are 65 or you are about to turn 65 within 12 weeks",
  },
  {
    id: 2,
    title: "Turanga Health",
    description: "Kaumatua support programmes and activities",
  },
  {
    id: 3,
    title: "Te Ara Tiaki Pakeke",
    description: "Needs Assessment and Service Coordination.",
  },
  {
    id: 4,
    title: "Eldernet",
    description: "Information about home help and personal care.",
  },
  {
    id: 5,
    title: "Hospice Tairawhiti",
    description: "Community based care from Morere to Potaka",
  },
];

function ElderCareCards() {
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

export default ElderCareCards;
