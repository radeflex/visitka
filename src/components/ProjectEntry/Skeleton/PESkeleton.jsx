import React from "react";
import Divider from "@mui/material/Divider";
import {
  Card,
  Box,
  Stack,
  Button,
  Skeleton,
} from "@mui/material";

export default function PESkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "100%",
        maxHeight: "78%",
        borderRadius: "20px",
        boxShadow: "1px 2px 2px #c9c9c9",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Skeleton variant="rectangular" sx={{borderRadius: "10px", height: "11rem", width: "32rem"}} />
        <Divider />
        <Box sx={{ p: 5 }}>
          <Stack direction="column" spacing={0.5} alignItems="flex-start">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "1.3rem", width: "10rem" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "1.3rem", width: "10rem" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "1.3rem", width: "10rem" }}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", marginTop: "4%" }}
          >
            <Stack direction="row" spacing={1}>
              <Skeleton variant="rounded" sx={{ fontSize: "1rem", height: "2rem", width: "4rem", borderRadius: "15px"}} />
              <Skeleton variant="rounded" sx={{ fontSize: "1rem", height: "2rem", width: "4rem", borderRadius: "15px"}} />
              <Skeleton variant="rounded" sx={{ fontSize: "1rem", height: "2rem", width: "4rem", borderRadius: "15px"}} />
            </Stack>
            <Button sx={{height: "2rem"}} variant="contained"></Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
