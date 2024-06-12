// src/App.tsx
import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleFeedbackSubmitted = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Feedback App</h1>
      <FeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />
      <FeedbackList key={refresh ? "refresh" : "no-refresh"} />
    </div>
  );
};

export default App;
