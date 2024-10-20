import React, { useState } from "react";
import "./Projects.css";
import ProjectEntry from "../../components/ProjectEntry/ProjectEntry";
import { Container, Pagination } from "@mui/material";

export default function Projects() {
  const [data, setData] = useState();

  fetch("https://api.github.com/")

  return (
    <Container className="__container">
      <h1>Projects</h1>
      <ProjectEntry />
      <Pagination count={10} color="primary" />
    </Container>
  );
}
