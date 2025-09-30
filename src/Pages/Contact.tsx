import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8 flex justify-center">
      <div className="bg-white shadow rounded-lg p-6 max-w-md w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
        <input type="text" placeholder="Name" className="border px-3 py-2 rounded" />
        <input type="email" placeholder="Email" className="border px-3 py-2 rounded" />
        <textarea placeholder="Message" className="border px-3 py-2 rounded" rows={5}></textarea>
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
