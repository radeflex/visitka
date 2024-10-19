import React from "react";
import "./Home.css";
import { Button, Container } from "react-bootstrap";
import thumbup from "../../img/thumb-up.png";

export default function Home() {
  return (
    <div>
      <Container className="_container">
        <section className="text-block">
          <h1 className="title">Hello there!</h1>
          <p className="text">I hope you will like this application!</p>
          <Button variant="outline-success" href="/projects">
            Go to projects
          </Button>
        </section>
        <img src={thumbup} alt="gift" height="60%" width="30%"/>
      </Container>
    </div>
  );
}
