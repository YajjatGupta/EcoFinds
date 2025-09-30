import React from "react";

const SellPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-start p-8">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-lg flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Sell Your Product</h1>
        <input type="text" placeholder="Product Name" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Brand" className="border px-3 py-2 rounded" />
        <input type="number" placeholder="Price" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Condition" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Time Used" className="border px-3 py-2 rounded" />
        <input type="file" multiple className="border p-2 rounded" />
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Warranty Available
        </label>
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SellPage;
