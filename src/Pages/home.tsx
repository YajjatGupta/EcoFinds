import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Auth from "./Auth";

const sampleListings = [
  { id: 1, title: "iPhone 12 - 128GB", price: "₹22,000", location: "Mumbai", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", category: "Mobiles" },
  { id: 2, title: "Royal Enfield Classic 350", price: "₹1,40,000", location: "Pune", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70", category: "Vehicles" },
];

const categories = ["Mobiles", "Vehicles", "Furniture", "Electronics", "Fashion"];

const HomePage: FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="bg-white shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Hamburger menu on the left */}
            <div className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="p-2 rounded-lg border hover:bg-gray-50 flex items-center justify-center"
              >
                ☰
              </button>
              {dropdownOpen && (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-0 bg-white border shadow-md rounded-md mt-1 py-2 w-32"
                >
                  <a href="#" className="block px-3 py-1 hover:bg-gray-100">About Us</a>
                  <a href="#" className="block px-3 py-1 hover:bg-gray-100">Contact Us</a>
                </div>
              )}
            </div>

            <div className="text-2xl font-bold text-emerald-600">EcoFinds</div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex gap-4 items-center">
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-50">Buy</button>
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-50">Sell</button>
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-50">My Ads</button>

            {/* Cart Button */}
            <a href="/cart">
              <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
                🛒
              </button>
            </a>

            {/* Profile Button */}
            <button
              onClick={() => setAuthOpen(true)}
              className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex justify-center items-center hover:ring-2 hover:ring-emerald-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User"
                className="w-8 h-8"
              />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="sm:hidden p-2 rounded bg-gray-200">☰</button>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for items, brands, or sellers"
            className="flex-1 border rounded-xl px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-500">
            Search
          </button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-3 py-1 rounded-full border text-sm font-medium hover:bg-emerald-50"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FEATURED LISTINGS */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-3">Featured Listings</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {sampleListings.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              {...{ className: "min-w-[220px] bg-white rounded-2xl p-3 shadow" }}
            >
              <div className="h-40 w-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-emerald-600 font-bold">{item.price}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Auth Modal */}
      {authOpen && <Auth onClose={() => setAuthOpen(false)} />}
    </div>
  );
};

export default HomePage;
