import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Baos } from "./screens/Baos";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Baos />
  </StrictMode>,
);
