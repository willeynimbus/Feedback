// src/components/FeedbackList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbackEntries, setFeedbackEntries] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("/api/feedback");
        setFeedbackEntries(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>
      <ul>
        {feedbackEntries.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.name}</strong>: {entry.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
