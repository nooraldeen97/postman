import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview({ nameText,AgeText }) {
    return <HelloWorldSample nameText={nameText} AgeText={AgeText} />;
}

export function getPreviewCss() {
    return require("./ui/Postman.css");
}
