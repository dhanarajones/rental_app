import PropertyCard from '../common/PropertyCard';

// Mock data for featured properties
const featuredProperties = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    location: 'Downtown, New York',
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3',
    squareFeet: 1200
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    location: 'Miami Beach, Florida',
    price: 4000,
    bedrooms: 3,
    bathrooms: 2.5,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
    squareFeet: 2000
  },
  {
    id: '3',
    title: 'Cozy Studio Apartment',
    location: 'Brooklyn, New York',
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3',
    squareFeet: 800
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium rental properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties; 