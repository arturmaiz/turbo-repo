import "./App.css";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Movies 🎦"
      routes={[{ path: "/", element: () => <>THis is 🙃Home</> }]}
      navLinks={[{ path: "/", label: "Home" }]}
    />
  );
}

export default App;
