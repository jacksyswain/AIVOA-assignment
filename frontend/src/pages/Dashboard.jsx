import InteractionForm from "../components/InteractionForm";
import ChatAssistant from "../components/ChatAssistant";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      {/* 🔵 Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Log HCP Interaction
          </h1>
          <p className="text-sm text-gray-500">
            Capture and manage healthcare professional interactions
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
            Save Draft
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            Submit
          </button>
        </div>
      </header>

      {/* 🔶 Main Layout */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-12 gap-6 h-full">
          
          {/* 🟢 LEFT (Form) */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-sm h-full p-6">
              <InteractionForm />
            </div>
          </div>

          {/* 🤖 RIGHT (AI Panel) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm h-full p-4 sticky top-6">
              <ChatAssistant />
            </div>
          </div>

        </div>
      </div>

      {/* 🔻 Footer */}
      <footer className="text-center text-xs text-gray-400 py-3">
        AI CRM • Built for Field Representatives
      </footer>
    </div>
  );
}