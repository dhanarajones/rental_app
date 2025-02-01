import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RentalHome</h3>
              <p className="text-gray-400">
                Find your perfect rental property with ease.
                We connect tenants with quality homes and trusted landlords.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@rentalhome.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Main St, New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 RentalHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 