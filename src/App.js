import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import "./index.css";

import { PDFViewer } from "@react-pdf/renderer";
import { ButtonPdf, Pdf } from "./pages/ButtonPdf";

const Container = styled.div`
  width: 100%;
  min-height: -webkit-fill-available;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  width: 100%;
  height: 460px;
  padding: 15px;
  display: flex;
`;

const Card = styled.div`
  width: 860px;
  height: 680px;
  border-radius: 8px;
  background: white;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 10px 10px 41px -12px rgba(3, 3, 3, 1);
`;

const App = () => {
  const [value, setValue] = useState({
    titulo: "",
    parrafo: "",
  });

  const obtenerValue = (e) => {
    console.log(e.target.id);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Card>
        <h1>Generador de PDF</h1>

        <Grid>
          <Grid style={{ flexDirection: "column", width: "40%" }}>
            <TextField
              style={{ width: "80%", margin: "20px" }}
              name="titulo"
              label="Título"
              variant="outlined"
              value={value.titulo}
              onChange={(e) => obtenerValue(e)}
            />

            <TextField
              style={{ width: "80%", margin: "20px" }}
              name="parrafo"
              label="Párrafo"
              variant="outlined"
              value={value.parrafo}
              onChange={(e) => obtenerValue(e)}
            />
          </Grid>

          <Grid
            style={{
              flexDirection: "column",
              width: "60%",
              marginTop: "-45px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Vista previa</h3>
            <PDFViewer
              width="100%"
              height="100%"
              style={{ border: "2px solid grey", borderRadius: "6px" }}
            >
              <Pdf data={value} />
            </PDFViewer>
          </Grid>
        </Grid>

        <ButtonPdf data={value} />
      </Card>
    </Container>
  );
};

export default App;
