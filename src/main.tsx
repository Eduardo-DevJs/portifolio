import ReactDOM from "react-dom/client";
import { router } from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./Contexts/ThemeContext.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
