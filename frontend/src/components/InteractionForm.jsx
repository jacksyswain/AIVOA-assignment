import { useDispatch } from "react-redux";
import { addInteraction } from "../redux/interactionSlice";
import { useState } from "react";

export default function InteractionForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", notes: "" });

  const handleSubmit = () => {
    dispatch(addInteraction(form));
    setForm({ name: "", notes: "" });
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="font-bold mb-2">Log Interaction</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="HCP Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Notes"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
        Save
      </button>
    </div>
  );
}