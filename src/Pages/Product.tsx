import React from "react";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Product Details (ID: {id})</h1>
        <div className="flex gap-6">
          <div className="w-1/2">
            <img src="/images/laptop.jpg" alt="Product" className="rounded w-full" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <p><strong>Name:</strong> Placeholder Name</p>
            <p><strong>Price:</strong> Placeholder Price</p>
            <p><strong>Time Used:</strong> Placeholder Duration</p>
            <p><strong>Condition:</strong> Placeholder Condition</p>
            <p><strong>Defects:</strong> Placeholder Defects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
