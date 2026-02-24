import { Box, Container, Typography } from "@mui/material";
import SelectActionCard from "./SelectActionCard";

function Homepage({ searchTerm }) {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd, #f5f7fa)",
        }}
      >
        <Container sx={{ py: 6 }}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: 2,
              boxShadow: 2,
              p: 4,
              mb: 4,
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to Tairawhiti Community Voice
            </Typography>
            <Typography variant="h1" gutterBottom>
              This site is pulled together voluntarily. It is a place where
              anyone can find, seek or access what ever it is you need. The
              information links provided are for your information only. All
              other feedback and shared information is based on the lived
              experience of others who have sought similar things and shared
              their experience. If the thing that you are looking for is not
              already available, go to the chat foum to share your question OR
              make contact directly.
            </Typography>
          </Box>

          <SelectActionCard searchTerm={searchTerm}></SelectActionCard>
        </Container>
      </Box>
    </>
  );
}

export default Homepage;
