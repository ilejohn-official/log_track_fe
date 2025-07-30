import { useState } from 'react';
import TripForm from './components/TripForm';
import TripDetails from './components/TripDetails';
import ELDLogSheet from './components/ELDLogSheet';
import TripMap from './components/TripMap';
import { planTrip } from './api';

export default function App() {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlanTrip = async (data) => {
    setLoading(true);
    try {
      const tripData = await planTrip(data);
      setTrip(tripData);
      console.log("Trip planned successfully:", tripData);
    } catch (err) {
      alert("Failed to plan trip");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Trip Planner
        </h1>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Plan Your Trip</h2>
          <TripForm onSubmit={handlePlanTrip} disabled={loading} />
          {loading && <p className="mt-4 text-blue-500">Calculating trip...</p>}
        </div>

        {/* Trip Details */}
        {trip && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <TripDetails trip={trip} />
          </div>
        )}

        {/* Map */}
        {trip && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <TripMap trip={trip} />
          </div>
        )}

        {/* Log Sheet */}
        {trip && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ELDLogSheet logs={trip.logs} />
          </div>
        )}
      </div>
    </div>
  );
}



