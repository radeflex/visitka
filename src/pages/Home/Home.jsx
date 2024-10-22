import React from "react";
import "./Home.css";
import { Button, Container } from "react-bootstrap";
import thumbup from "../../img/thumb-up.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="_container">
        <section className="text-block">
          <span className="home-title">Привет!</span>
          <p className="text">Надеюсь тебе понравится мое веб-приложение!</p>
          <Button variant="outline-success" onClick={() => {navigate("/projects")}}>
            К проектам
          </Button>
        </section>
        <img src={thumbup} alt="gift" className="block-img"/>
      </Container>
    </div>
  );
}
