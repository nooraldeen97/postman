import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { createElement } from "react";
import axios from "axios";

export function HelloWorldSample({ urltext, textName, imgKey }) {
    const [data, setData] = useState([]);
    const options = {
        method: "get",
        url: urltext,
    };
    useEffect(() => {
        axios(options).then(response => {
            console.log("data", response);
            setData(response.data);
        });
    }, []);
    return (
        <div className="widget-hello-world">
            <h4 style={{ color: "purple" }}> Url: {urltext}</h4>
            <Row xs={1} md={4} className="g-4">
                {data
                    ? data.map(element => {
                          element["name"] = element[textName];
                          delete element[textName];

                          element["img"] = element[imgKey];
                          delete element[imgKey];

                          return (
                              <>
                                  <Col>
                                      <Card>
                                          <Card.Img variant="top" src={element.img} alt={element.name} />
                                          <Card.Body>
                                              <Card.Title> {element.name}</Card.Title>
                                          </Card.Body>
                                      </Card>
                                  </Col>
                                  {/* {Object.values(element).map(val => {
                                  if (typeof val == "string")
                                      return val.match("[a-z-_0-9/:.]*.(jpg|jpeg|png|gif)") ? <img src={val} /> : "";
                              })} */}
                              </>
                          );
                      })
                    : "Nothing to show"}
            </Row>
        </div>
    );
}
