import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/auth";
import "./index.css";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
