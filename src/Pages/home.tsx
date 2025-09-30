import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  { id: 1, name: "Used Laptop", price: "$450", image: "/images/laptop.jpg" },
  { id: 2, name: "Smartphone", price: "$200", image: "/images/phone.jpg" },
  { id: 3, name: "Bicycle", price: "$150", image: "/images/bike.jpg" },
  { id: 4, name: "Headphones", price: "$50", image: "/images/headphones.jpg" },
];

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Navbar */}
      <nav className="bg-green-600 text-white flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            <FaBars />
          </button>
          <span className="font-bold text-xl">EcoFinds</span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/sell" className="px-4 py-2 border-2 border-green-800 rounded-full bg-green-100 hover:bg-green-200">
            Sell
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="text-2xl" />
          </Link>
          <Link to="/login">
            <FaUserCircle className="text-2xl" />
          </Link>
        </div>
      </nav>

      {/* Hamburger menu */}
      {menuOpen && (
        <div className="bg-green-100 text-green-900 p-4 flex flex-col gap-2">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      )}

      {/* Search & Filter */}
      <div className="flex justify-center mt-6 gap-4">
        <div className="flex border-2 border-green-400 rounded-full overflow-hidden w-1/3">
          <input
            type="text"
            placeholder="Search items..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="px-4 bg-green-500 hover:bg-green-600 text-white">
            <FaSearch />
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="px-4 py-2 border-2 border-green-500 rounded-full bg-green-100 hover:bg-green-200"
          >
            Filter
          </button>
          {filterOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow p-2 flex flex-col gap-2">
              <label>Price: <input type="range" min="0" max="1000" /></label>
              <label>Brand: <input type="text" placeholder="Brand" className="border px-2 rounded" /></label>
              <label>Condition: 
                <select className="border px-2 rounded">
                  <option>New</option>
                  <option>Used</option>
                  <option>Refurbished</option>
                </select>
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h2 className="font-bold">{p.name}</h2>
              <p className="text-green-800 font-semibold">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
