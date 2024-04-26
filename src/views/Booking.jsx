import { useSelector, useDispatch } from "react-redux";
import { clearBookings, removeBooking } from "../redux/bookingSlice";

const Booking = () => {
  const bookings = useSelector((state) => state.bookings.bookings);
  const dispatch = useDispatch();

  if (!bookings) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Bookings</h1>
      <div className="flex justify-center mb-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          onClick={() => dispatch(clearBookings())}>
          Clear
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {bookings.map((property) => (
          <li
            key={property.id}
            className="border p-4 shadow-md rounded-lg">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">{property.description}</p>
              <p className="text-lg font-bold">₹{property.price}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                onClick={() => dispatch(removeBooking(property.id))}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
