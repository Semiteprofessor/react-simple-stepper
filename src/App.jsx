import { useState } from "react";
import "./App.css";

const steps = [
  {
    title: "Step 1",
    content: "This is the first step",
  },
  {
    title: "Step 2",
    content: "This is the second step",
  },
  {
    title: "Step 3",
    content: "This is the third step",
  },
];

function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step === steps.length - 1) {
      return;
    } else {
      setStep((step) => step + 1);
    }
  };

  const handlePrevious = () => {
    if (step === 0) {
      setStep(step);
    } else {
      setStep((step) => step - 1);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 0 ? "active" : ""}`}>1</div>
        <div className={`${step >= 1 ? "active" : ""}`}>2</div>
        <div className={`${step >= 2 ? "active" : ""}`}>3</div>
      </div>

      <h1>
        {steps[step - 0].title}: {steps[step - 0].content}
      </h1>

      <div className="btn">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
