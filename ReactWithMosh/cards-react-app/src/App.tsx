import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "SFO", "London", "Paris", "Tokyo"];
  const handleSlectionItem = (item: string) => {
    console.log(item);
    setSelectedCity("Selected City is " + item);
  };
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSlectionItem}
      />
      {selectedCity.length > 0 && <Alert text={selectedCity} />}
    </div>
  );
}

export default App;
