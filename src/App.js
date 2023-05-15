import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Form,
  Container,
  Row,
  Col,
  Image,
  InputGroup
} from "react-bootstrap";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://example.qlassku.com/get-all-locations").then((doc) => {
      setData(doc.data);
    });
  }, []);

  return (
    <div className="App" style={{ marginTop: "10px" }}>
      <Container>
        <h3 style={{ textAlign: "center" }}>
          Cari Foto Tempat Wisata Favorit Kamu
        </h3>
        <Row>
          <InputGroup
            className="mb-3"
            style={{ padding: "13px 13px 0px 13px" }}
          >
            <Form.Control
              placeholder="Search By Place's Name"
              aria-label="Search By Place's Name"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          {data.map((data) => {
            return (
              <Col>
                <Card
                  style={{ width: "100%", marginTop: "10px", padding: "10px" }}
                >
                  <Image
                    className="img-thumbnail"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="contoh"
                    src={data.foto}
                  ></Image>
                  <Card.Body>
                    <Card.Title>Lokasi: {data.nama}</Card.Title>
                    <Card.Text>{data.title}</Card.Text>
                    <a href={data.foto}>
                      <Button variant="primary">Download</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
