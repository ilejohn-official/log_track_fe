export default function TripDetails({ trip }) {
  if (!trip) return null;
  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-4">
      <h2 className="text-lg font-bold">Trip Summary</h2>
      <p><b>Total Miles:</b> {trip.total_miles}</p>
      <p><b>Total Days:</b> {trip.total_days}</p>
      <h3 className="mt-2 font-semibold">Stops</h3>
      <ul className="list-disc ml-5">
        {trip.stops.map((s, i) => (
          <li key={i}>{s.stop_type} - {s.name}</li>
        ))}
      </ul>
    </div>
  );
}
