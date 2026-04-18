import InteractionForm from "../components/InteractionForm";
import ChatAssistant from "../components/ChatAssistant";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-4">Log HCP Interaction</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="col-span-2">
          <InteractionForm />
        </div>

        {/* RIGHT */}
        <div>
          <ChatAssistant />
        </div>
      </div>
    </div>
  );
}