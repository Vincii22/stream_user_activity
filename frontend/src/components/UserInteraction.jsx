import API from "../api/api";

export default function UserInteraction() {
    const sendEvent = async (eventType) => {
        try {
            await API.post("/events", { type });
            alert(`${type} event sent!`);
        } catch (err) {
            console.error(err);
        }
    };


return (
        <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-2xl font-bold">Simulate User Activity</h2>
      <div className="flex gap-4">
        <button
          onClick={() => sendEvent("click")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Click Event
        </button>
        <button
          onClick={() => sendEvent("login")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Login Event
        </button>
      </div>
    </div>
  );
};