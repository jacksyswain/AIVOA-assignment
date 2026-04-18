import { useState } from "react";

export default function InteractionForm() {
  const [form, setForm] = useState({
    name: "",
    type: "Meeting",
    date: "",
    time: "",
    attendees: "",
    topics: "",
    sentiment: "neutral",
    outcomes: "",
    followup: "",
  });

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Interaction Details</h2>

      {/* HCP Name + Type */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="Search or select HCP..."
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <select
          className="border p-2 rounded"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option>Meeting</option>
          <option>Call</option>
          <option>Email</option>
        </select>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="date"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="time"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
      </div>

      {/* Attendees */}
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter attendees..."
        onChange={(e) => setForm({ ...form, attendees: e.target.value })}
      />

      {/* Topics */}
      <textarea
        className="border p-2 rounded w-full mb-4"
        placeholder="Topics discussed..."
        onChange={(e) => setForm({ ...form, topics: e.target.value })}
      />

      {/* Materials */}
      <div className="mb-4">
        <p className="font-medium mb-2">Materials Shared</p>
        <button className="border px-3 py-1 rounded">Search/Add</button>
      </div>

      {/* Sentiment */}
      <div className="mb-4">
        <p className="font-medium mb-2">Sentiment</p>
        <div className="flex gap-4">
          {["positive", "neutral", "negative"].map((s) => (
            <label key={s}>
              <input
                type="radio"
                name="sentiment"
                checked={form.sentiment === s}
                onChange={() => setForm({ ...form, sentiment: s })}
              />{" "}
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <textarea
        className="border p-2 rounded w-full mb-4"
        placeholder="Outcomes..."
        onChange={(e) => setForm({ ...form, outcomes: e.target.value })}
      />

      {/* Followup */}
      <textarea
        className="border p-2 rounded w-full"
        placeholder="Follow-up actions..."
        onChange={(e) => setForm({ ...form, followup: e.target.value })}
      />
    </div>
  );
}