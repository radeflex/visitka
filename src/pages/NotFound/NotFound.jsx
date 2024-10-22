import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <Container className="nf-container">
        <div className="title-cont">
          <h1 className="title">404</h1>
          <h2 className="title-desc">Page not found</h2>
        </div>

        <p className="description">Please sure that your URL is correct. Redirecting to home..</p>
      </Container>
    </div>
  );
}
