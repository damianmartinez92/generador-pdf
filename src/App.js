import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import "./index.css";
import ButtonPdf from "./pages/MyDocument";

const Container = styled.div`
  width: 100%;
  min-height: -webkit-fill-available;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 490px;
  height: 490px;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 10px 10px 41px -12px rgba(3,3,3,1);
`;

const App = () => {
  const [titulo, setTitulo] = useState("");
  const [parrafo, setParrafo] = useState("");

  return (
    <Container>
      <Card>
        <h1>Generador de PDF</h1>

        <TextField
          id="titulo"
          label="Título"
          variant="outlined"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <TextField
          id="parrafo"
          label="Párrafo"
          variant="outlined"
          value={parrafo}
          onChange={(e) => setParrafo(e.target.value)}
        />

        <ButtonPdf titulo={titulo} parrafo={parrafo} />
      </Card>
    </Container>
  );
};

export default App;
