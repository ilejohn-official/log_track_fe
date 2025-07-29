import { useState } from 'react';
import TripForm from './components/TripForm';
import TripDetails from './components/TripDetails';
import { planTrip } from './api';

export default function App() {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlanTrip = async (data) => {
    setLoading(true);
    try {
      const res = await planTrip(data);
      setTrip(res.data);
    } catch (err) {
      alert("Failed to plan trip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trip Planner</h1>
      <TripForm onSubmit={handlePlanTrip} />
      {loading && <p>Loading...</p>}
      <TripDetails trip={trip} />
    </div>
  );
}
