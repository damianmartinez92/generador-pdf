import React, { useState } from "react";
import { Grid, Container, TextField } from "@material-ui/core";
import "./index.css";
import ButtonPdf from "./pages/MyDocument";

const App = () => {
  const [titulo, setTitulo] = useState("");
  const [parrafo, setParrafo] = useState("");

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Generador de PDF</h1>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="titulo"
            label="Titulo"
            variant="outlined"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="parrafo"
            label="Parrafo"
            variant="outlined"
            value={parrafo}
            onChange={(e) => setParrafo(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <ButtonPdf titulo={titulo} parrafo={parrafo} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
