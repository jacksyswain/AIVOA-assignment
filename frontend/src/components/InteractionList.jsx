import { useSelector } from "react-redux";

export default function InteractionList() {
  const interactions = useSelector((s) => s.interaction.interactions);

  return (
    <div className="p-4">
      <h2 className="font-bold">Interactions</h2>
      {interactions.map((i, idx) => (
        <div key={idx} className="border p-2 my-2">
          <p>{i.name}</p>
          <p>{i.notes}</p>
        </div>
      ))}
    </div>
  );
}