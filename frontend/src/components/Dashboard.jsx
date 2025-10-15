import { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard() {
  const [data, setData] = useState({ active_users: 0, total_events: 0 });

  const fetchData = async () => {
    try {
      const res = await API.get("/analytics/summary");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Real-Time Dashboard</h2>
      <div className="flex justify-center gap-10 text-lg">
        <div>
          <span className="font-semibold">Active Users (5 min):</span>{" "}
          {data.active_users}
        </div>
        <div>
          <span className="font-semibold">Total Events:</span>{" "}
          {data.total_events}
        </div>
      </div>
    </div>
  );
}
