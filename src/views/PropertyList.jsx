import { useDispatch } from "react-redux";
import { addBooking } from "../redux/bookingSlice";

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      title: "Cozy Cottage",
      description: "A lovely cottage in the countryside.",
      price: 120,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image: "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg",
    },
    {
      id: 3,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image:
        "https://assets.onepropertee.com/720x540/crop/listing_images/viber-image-2022-02-04-17-54-52-753.dHL646W7SELujiyJm.jpg",
    },
    {
      id: 4,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image:
        "https://assets.onepropertee.com/720x540/listing_images/viber-image-2022-02-04-17-54-52-796.dHL646W7SELujiyJm.jpg",
    },
    {
      id: 5,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image:
        "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150765.jpg",
    },
    {
      id: 6,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6y0SqgXlQxySc1o8MN8TlZ4tSLX0pbgprvU2jRii1Q1juBsJcdnxc7_mytrd3WkVlDc&usqp=CAU",
    },
    {
      id: 7,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image:
        "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg",
    },
    {
      id: 8,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0V-oGpNG_xJGgLAKIprFU1whDeH4sdb4-2KMqgOFs1YP55hE41PO1Lwxb7ePEJC4Aix0&usqp=CAU",
    },
    {
      id: 9,
      title: "Urban Apartment",
      description: "Modern apartment in the city center.",
      price: 200,
      image: "https://www.bankrate.com/2022/04/14092711/what-is-tangible-personal-property.jpg",
    },
  ];

  const dispatch = useDispatch();

  const handleBooking = (property) => {
    dispatch(addBooking(property));
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Property Listings</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {properties.map((property) => (
          <li
            key={property.id}
            className="border p-4 shadow-lg rounded-lg">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">{property.description}</p>
              <p className="text-lg font-bold">₹{property.price}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleBooking(property)}>
                Book Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
