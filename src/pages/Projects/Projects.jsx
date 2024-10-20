import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectEntry from "../../components/ProjectEntry/ProjectEntry";
import { Container, Pagination } from "@mui/material";

export default function Projects() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [langs, setLangs] = useState([]);
  const [repo, setRepo] = useState();

  useEffect(() => {
    fetchLangs();
  }, []);
  return (
    <Container className="__container">
      <h1>Projects</h1>
      <ProjectEntry langs={langs} title={title} author={author} repoLink={repo}/>
      <Pagination count={10} color="primary" />
    </Container>
  );

  function fetchLangs() {
    fetch("https://api.github.com/repos/radeflex/freelrepos")
      .then((resp) => resp.json())
      .then((data) => {
        fetch(data.languages_url)
          .then((resp) => resp.json())
          .then((langs) => {
            setLangs(Object.keys(langs));
          });
        setAuthor(data.owner.login);
        console.log(data.owner.description);
        setTitle(data.description)
        setRepo(data.html_url)
      });
  }
}
