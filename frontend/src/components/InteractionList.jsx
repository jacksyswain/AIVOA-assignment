import { useSelector } from "react-redux";

export default function InteractionList() {
  const interactions = useSelector(
    (s) => s.interaction.interactions
  );

  return (
    <div className="p-6 bg-gray-50 dark:bg-[#020617] min-h-screen">
      {/* 🔷 Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          📋 Interactions
        </h2>

        <span className="text-sm text-gray-500">
          {interactions.length} total
        </span>
      </div>

      {/* 📂 List Container */}
      <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">

        {/* ❌ Empty State */}
        {interactions.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            <p className="text-lg">No interactions yet</p>
            <p className="text-sm">
              Start logging interactions to see them here
            </p>
          </div>
        )}

        {/* 🧾 Cards */}
        {interactions.map((i, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {i.name || "Unknown"}
              </h3>

              {/* 🕒 Time (if exists) */}
              {i.time && (
                <span className="text-xs text-gray-400">
                  {i.time}
                </span>
              )}
            </div>

            {/* Notes */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {i.notes || "No notes provided"}
            </p>

            {/* Optional Tags (future ready) */}
            {i.type && (
              <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {i.type}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}