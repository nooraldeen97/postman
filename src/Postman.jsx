import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Postman.css";

export function Postman({ nameText,AgeText }) {
    return <HelloWorldSample nameText={nameText} AgeText={AgeText} />;
}
