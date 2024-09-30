import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css"
import LoginPage from "./pages/auth/login/login.pages";

createRoot(document.getElementById("root")!).render(<StrictMode>
<LoginPage/>
</StrictMode>);
