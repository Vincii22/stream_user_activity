import UserInteraction from "./components/UserInteraction";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center py-6">User Activity Tracker</h1>
      <UserInteraction />
      <Dashboard />
    </div>
  );
}
