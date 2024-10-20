import React from "react";
import "./ProjectEntry.css";
import Divider from "@mui/material/Divider";
import { Card, Box, Stack, Chip, Typography, Button } from "@mui/material";
import gift from "../../img/gift-box.png";

export default function ProjectEntry({ langs }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "100%",
        maxHeight: "85%",
        borderRadius: "20px",
        boxShadow: "1px 2px 2px #c9c9c9",
      }}
    >
      <Box sx={{ p: 3 }}>
        <img src={gift} alt="project" height="30%" width="20%" />
        <Divider />
        <Box sx={{ p: 5 }}>
          <Stack direction="column" spacing={0.5} alignItems="flex-start">
            <Typography variant="h5">Freelance project</Typography>
            <Typography variant="h6">Author: author</Typography>
            <Typography variant="h6">Languages:</Typography>
          </Stack>
          <Stack direction="row" sx={{justifyContent: "space-between", marginTop: "4%"}}>
            <Stack direction="row" spacing={1}>
              <Chip label="Lang1" size="medium" />
              <Chip label="Lang2" size="medium" />
              <Chip label="Lang3" size="medium" />
            </Stack>
            <Button variant="contained" href="https://github.com/radeflex/freelrepos">Go to</Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
