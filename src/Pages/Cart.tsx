import type { FC } from "react";

const CartPage: FC = () => {
  const cartItems = [
    { id: 1, title: "iPhone 12 - 128GB", price: "₹22,000", quantity: 1 },
    { id: 2, title: "Royal Enfield Classic 350", price: "₹1,40,000", quantity: 1 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border rounded-lg p-4 shadow">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.price}</p>
              </div>
              <div>Qty: {item.quantity}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
