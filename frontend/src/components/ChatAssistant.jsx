import { useState } from "react";
import { sendChat } from "../services/api";

export default function ChatAssistant() {
  const [msg, setMsg] = useState("");
  const [res, setRes] = useState("");

  const handleSend = async () => {
    const { data } = await sendChat({ message: msg });
    setRes(JSON.stringify(data));
  };

  return (
    <div className="p-4 bg-gray-100 shadow rounded">
      <h2 className="font-bold mb-2">AI Assistant</h2>
      <input
        className="border p-2 w-full mb-2"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={handleSend} className="bg-green-500 text-white px-4 py-2">
        Send
      </button>
      <p className="mt-2 text-sm">{res}</p>
    </div>
  );
}