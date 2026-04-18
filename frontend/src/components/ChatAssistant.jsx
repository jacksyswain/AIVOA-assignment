import { useState } from "react";

export default function ChatAssistant() {
  const [msg, setMsg] = useState("");

  return (
    <div className="bg-white rounded-xl shadow p-4 h-full flex flex-col">
      <h2 className="font-semibold mb-2">AI Assistant</h2>
      <p className="text-sm text-gray-500 mb-3">
        Log interaction via chat
      </p>

      {/* Chat Box */}
      <div className="bg-gray-100 p-3 rounded mb-4 flex-1 text-sm">
        Log interaction details here (e.g. "Met Dr. Smith...")
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Describe interaction..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="bg-gray-800 text-white px-4 rounded">
          Log
        </button>
      </div>
    </div>
  );
}