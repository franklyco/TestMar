import React from "react";
import ReactDOMClient from "react-dom/client";
import { ProductHero } from "./screens/ProductHero";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ProductHero />);
