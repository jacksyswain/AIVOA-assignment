import InteractionForm from "../components/InteractionForm";
import ChatAssistant from "../components/ChatAssistant";
import InteractionList from "../components/InteractionList";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <div>
        <InteractionForm />
        <InteractionList />
      </div>
      <ChatAssistant />
    </div>
  );
}