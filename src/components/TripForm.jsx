import { useForm } from 'react-hook-form';

export default function TripForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white shadow-md rounded-lg space-y-3">
      <div>
        <label className="block font-medium">Current Location</label>
        <input {...register('current_location')} className="w-full border p-2 rounded" required />
      </div>
      <div>
        <label className="block font-medium">Pickup Location</label>
        <input {...register('pickup_location')} className="w-full border p-2 rounded" required />
      </div>
      <div>
        <label className="block font-medium">Dropoff Location</label>
        <input {...register('dropoff_location')} className="w-full border p-2 rounded" required />
      </div>
      <div>
        <label className="block font-medium">Current Cycle Used (hrs)</label>
        <input type="number" {...register('current_cycle_used')} className="w-full border p-2 rounded" required min="0" max="70" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Plan Trip</button>
    </form>
  );
}
