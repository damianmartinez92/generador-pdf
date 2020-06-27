import React from "react";
import { Button } from "@material-ui/core";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const Pdf = (data) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{data.titulo}</Text>
        </View>
        <View style={styles.section}>
          <Text>{data.parrafo}</Text>
        </View>
      </Page>
    </Document>
  );
};

const ButtonPdf = (props) => (
  <Button variant="contained" color="primary" size="medium">
    <PDFDownloadLink
      document={<Pdf titulo={props.titulo} parrafo={props.parrafo} />}
      fileName="generatePdf.pdf"
      style={{
        textDecoration: "none",
        color: "white",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Generando PDF..." : "Descargar"
      }
    </PDFDownloadLink>
  </Button>
);

export default ButtonPdf;
