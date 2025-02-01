import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?location=${location}&price=${priceRange}`);
  };

  return (
    <div className="relative bg-primary-900 h-[500px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3")',
          opacity: '0.3'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find Your Perfect Rental Home
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover thousands of rental properties in your desired location. 
          Your dream home is just a search away.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-4xl w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter location..."
              className="input-field md:flex-1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <select
              className="input-field md:w-48"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Price Range</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
              <option value="3000+">$3,000+</option>
            </select>
            <button type="submit" className="btn-primary md:w-32">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero; 