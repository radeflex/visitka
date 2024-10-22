import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectEntry from "../../components/ProjectEntry/ProjectEntry";
import { Container, Pagination } from "@mui/material";
import PESkeleton from "../../components/ProjectEntry/Skeleton/PESkeleton";
import visitkaImg from "../../img/visitka.png";
import freelreposImg from "../../img/freelrepos.png";
import directorsImg from "../../img/directors.png";

const projects = [
  "https://api.github.com/repos/radeflex/freelrepos",
  "https://api.github.com/repos/radeflex/directors-project",
  "https://api.github.com/repos/radeflex/visitka",
];

const imgs = [freelreposImg, directorsImg, visitkaImg];

export default function Projects() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [langs, setLangs] = useState([]);
  const [currentPage, setPage] = useState(0);
  const [repo, setRepo] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    fetchRepo(currentPage);
  }, [currentPage]);
  return (
    <Container className="__container">
      <h1>Projects</h1>
      <ProjectEntry
        langs={langs}
        title={title}
        author={author}
        repoLink={repo}
        img={img}
      />
      {/* <PESkeleton /> */}
      <Pagination
        count={projects.length}
        onChange={(e, page) => {
          setPage(page - 1);
        }}
        color="primary"
      />
    </Container>
  );

  function fetchRepo(key) {
    fetch(projects[key])
      .then((resp) => resp.json())
      .then((data) => {
        fetch(data.languages_url)
          .then((resp) => resp.json())
          .then((langs) => {
            setLangs(Object.keys(langs));
          });
        setAuthor(data.owner.login);
        setTitle(data.description);
        setRepo(data.html_url);
        setImg(imgs[key]);
      });
  }
}
