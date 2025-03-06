import { useState } from "react";
import Option from "./components/Option";

import "./App.css";

let lastAtivatedOneBefore;

function App() {
  const [fast, setFast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const [lastActivated, setLastActivated] = useState("");

  if (fast && good && cheap) {
    console.log(lastAtivatedOneBefore, lastActivated);

    switch (lastAtivatedOneBefore) {
      case "FAST":
        setFast(false);
        break;
      case "GOOD":
        setGood(false);
        break;
      case "CHEAP":
        setCheap(false);
        break;
      default:
        setFast(false);
        setGood(false);
        setCheap(false);
    }
  }
  lastAtivatedOneBefore = lastActivated;

  return (
    <>
      <main>
        <div className="options">
          <Option
            name={"FAST"}
            isActive={fast}
            setIsActive={setFast}
            setLastActivated={setLastActivated}
            color={"blue"}
          />
          <Option
            name={"GOOD"}
            isActive={good}
            setIsActive={setGood}
            setLastActivated={setLastActivated}
            color={"orange"}
          />
          <Option
            name={"CHEAP"}
            isActive={cheap}
            setIsActive={setCheap}
            setLastActivated={setLastActivated}
            color={"yellow"}
          />
        </div>
      </main>
    </>
  );
}

export default App;
