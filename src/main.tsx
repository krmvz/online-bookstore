import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MantineProvider theme={{ defaultRadius: "xl" }}>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
