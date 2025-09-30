import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p>
          EcoFinds is a second-hand marketplace where users can buy and sell used products easily.
          Our mission is to promote sustainable consumption and make buying and selling second-hand items simple, safe, and fun.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
