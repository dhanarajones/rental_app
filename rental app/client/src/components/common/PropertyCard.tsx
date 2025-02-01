import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  squareFeet: number;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  imageUrl,
  squareFeet,
}: PropertyCardProps) => {
  return (
    <Link to={`/properties/${id}`} className="block">
      <div className="card group hover:shadow-lg transition-shadow duration-200">
        {/* Property Image */}
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full">
            ${price.toLocaleString()}/mo
          </div>
        </div>

        {/* Property Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-3">{location}</p>
          
          {/* Property Features */}
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v3h4a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4V3z" />
              </svg>
              <span>{bedrooms} bed</span>
            </div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v3h3a1 1 0 011 1v9a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1h3V2zm10 6H5v8h10V8z" clipRule="evenodd" />
              </svg>
              <span>{bathrooms} bath</span>
            </div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span>{squareFeet} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard; 