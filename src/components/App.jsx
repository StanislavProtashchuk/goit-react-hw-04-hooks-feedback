import React, { useState} from "react";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Feedback/Statistics";

export function App() {
  const buttons = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const goodPersentage = Math.round((100 / total) * good);
  
  function onLeaveFeedback(e) {
    switch (e) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={onLeaveFeedback}/>
      </Section>
      <Section title="Statistic">
        {total === 0 ? (
          <Notification message="There is no feedback" />) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              goodPersentage={goodPersentage}
            />
          )}
      </Section>
    </div>
  );
};