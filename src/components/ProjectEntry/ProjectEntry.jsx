import React from "react";
import "./ProjectEntry.css";
import Divider from "@mui/material/Divider";
import { Card, Box, Stack, Chip, Typography, Button } from "@mui/material";

export default function ProjectEntry({ langs, author, title, repoLink, img }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "20px",
        boxShadow: "1px 2px 2px #c9c9c9",
        margin: "1%"
      }}
    >
      <Box sx={{ p: 1 }}>
        <img src={img} alt="project"  width="100%" />
        <Divider />
        <Box sx={{ p: 5 }}>
          <Stack direction="column" spacing={0.25} alignItems="flex-start">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">Author: {author}</Typography>
            <Typography variant="h6">Languages:</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", marginTop: "4%" }}
          >
            <Stack direction="row" spacing={1}>
              {langs.map((el, id) => (
                <Chip label={el} size="medium" key={id} />
              ))}
            </Stack>
            <Button
              variant="contained"
              href={repoLink}
            >
              Go to
            </Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
