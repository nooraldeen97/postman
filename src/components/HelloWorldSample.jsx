import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { createElement } from "react";
import axios from "axios";

export function HelloWorldSample({ urltext, textName, imgKey, widgetList, items }) {
    const [data, setData] = useState([]);
    const options = {
        method: "get",
        url: urltext
    };
    useEffect(() => {
        axios(options).then(response => {
            setData(response.data);
        });
    }, []);
    return (
        <div className="widget-hello-world">
            <h4 style={{ color: "purple" }}> Url: {urltext}</h4>
            <Row xs={1} md={4} className="g-4">
                <div>
                    {items.items &&
                        items.items.map(item => {
                            return <h1>{widgetList.get(item)}</h1>
                        })}
                </div>
            </Row>
        </div>
    );
}
