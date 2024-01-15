import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Tarjetas from "./components/Tarjeta/Tarjetas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Input />
      <Tarjetas />
    </section>
  );
}

export default App;
