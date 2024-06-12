// src/components/FeedbackForm.tsx
import React, { useState } from "react";
import axios from "axios";

interface FeedbackFormProps {
  onFeedbackSubmitted: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onFeedbackSubmitted }) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/feedback", { name, feedback });
      setName("");
      setFeedback("");
      onFeedbackSubmitted();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Feedback</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
