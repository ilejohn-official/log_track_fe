export default function TripDetails({ trip }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trip Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <p><strong>Total Miles:</strong> {trip.total_miles.toFixed(2)}</p>
        <p><strong>Total Days:</strong> {trip.total_days}</p>
      </div>
      <h3 className="text-lg font-semibold mb-2">Stops</h3>
      <ul className="list-disc ml-5 space-y-1">
        {trip.stops.map((s, i) => (
          <li key={i} className="capitalize">{s.stop_type} - {s.name}</li>
        ))}
      </ul>
    </div>
  );
}
