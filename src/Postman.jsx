import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Postman.css";

export function Postman({ urltext, textName, imgKey }) {
    return <HelloWorldSample urltext={urltext} textName={textName} imgKey={imgKey}  />;
}
