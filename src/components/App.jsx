import React, { useState } from "react";
import Section from "./Feedback/Section";
// import FeedbackOptions from "./Feedback/FeedbackOptions";

export function App() {

  const [good, setGood] = useState(0);

  function goodIncrement() {
    setGood(prevGood => prevGood + 1);
  }

    const [neutral, setNeutral] = useState(0);

  function neutralIncrement() {
    setNeutral(prevNeutral => prevNeutral + 1);
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <button
          type button
          onClick={goodIncrement}
        >
          Good</button>
                <button
          type button
          onClick={neutralIncrement}
        >
          Neutral</button>
      </Section>
      <Section title="Statistic">
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
        </ul>
      </Section>
      
    </div>
  );
};
