import React from "react";
import { Button } from "@material-ui/core";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

import foto from '../assets/images/programming.jpg'

// Create styles
const styles = StyleSheet.create({
  page: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  h1: {
    fontSize: 48,
    alignSelf: "center",
    margin: 30,
  },
  h2: {
    fontSize: 36,
    alignSelf: "center",
    margin: 30,
  },
  p: {
    fontSize: 16,
    color: "grey",
    marginBottom: 20,
  },
  image: {
    width: "80%",
    margin: "auto",
    borderRadius: 10,
  },
});

// Create Document Component
export const Pdf = (data) => {
  const { titulo, parrafo } = data.data;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.h1}>{titulo}</Text>

          <Text style={styles.h2}>{parrafo}</Text>
        </View>
        <Image
          src={foto}
          style={styles.image}
        />

        <Text style={styles.p}>
          Realizado con{" "}
          <Link src="https://react-pdf.org/" wrap>
            React-Pdf
          </Link>
          .{" "}
        </Text>
      </Page>
    </Document>
  );
};

export const ButtonPdf = (props) => (
  <Button variant="contained" color="primary" size="medium">
    <PDFDownloadLink
      document={<Pdf data={props.data} />}
      fileName="pdfGenerado.pdf"
      style={{
        textDecoration: "none",
        color: "white",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando PDF..." : "Descargar"
      }
    </PDFDownloadLink>
  </Button>
);
