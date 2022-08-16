import "./App.css";
import { ButtonsSection } from "./components/ButtonsSection";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <ButtonsSection />
      <Input type="text" placeholder="Enter text">
        The Label
      </Input>
    </div>
  );
}

export default App;
