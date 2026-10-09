import { useState } from "react";

export default function Composer() {
  const [draft, setDraft] = useState("");

  function send() {
    const text = draft.trim();
    if (text === "") {
      return;
    }
    console.log("send:", text);
    setDraft("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    send();
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea
        rows={2}
        placeholder="Type a message..."
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}