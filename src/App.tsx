import "./App.css";
import { ButtonsSection } from "./components/ButtonsSection";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <ButtonsSection />
      <Input labelText="Username: " type="text" placeholder="Enter name" />
      <br />
      <CheckboxGroup
        items={[
          { name: "banana", value: "banana" },
          { name: "tomato", value: "tomato" },
          { name: "apple", value: "apple" },
        ]}
        groupName={"fruits"}
      />{" "}
    </div>
  );
}

export default App;
