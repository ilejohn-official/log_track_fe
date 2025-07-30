import { useForm } from 'react-hook-form';

export default function TripForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block font-medium text-gray-700 mb-1">Current Location</label>
        <input {...register('current_location')} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Pickup Location</label>
        <input {...register('pickup_location')} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Dropoff Location</label>
        <input {...register('dropoff_location')} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Current Cycle Used (hrs)</label>
        <input type="number" {...register('current_cycle_used')} min="0" max="70" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
          Plan Trip
        </button>
      </div>
    </form>
  );
}
