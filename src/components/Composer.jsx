import { useState } from "react";

export default function Composer() {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit text:", text);
    setText(""); 
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea name="draft" 
      rows={2} 
      placeholder="Type a message..." 
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
